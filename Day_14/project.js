import { MongoClient } from "mongodb";
import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URL);

const redisClient = createClient({
  url: process.env.REDIS_URL
});

async function main() {
  try {

    // Connect to MongoDB
    await mongoClient.connect();

    // Connect to Redis
    await redisClient.connect();

    const db = mongoClient.db("company");
    const projects = db.collection("projects");

    // Tasks are embedded because every task belongs to one project.
    const sampleProjects = [
      {
        _id: 1,
        name: "Women Safety",
        status: "Active",
        createdAt: new Date(),
        tasks: [
          { title: "Login Module", completed: true, assignedTo: "Jeet" },
          { title: "Dashboard", completed: false, assignedTo: "Rahul" },
          { title: "SOS Alert", completed: false, assignedTo: "Amit" }
        ]
      },
      {
        _id: 2,
        name: "Travel Halt",
        status: "Completed",
        createdAt: new Date(),
        tasks: [
          { title: "Hotel Listing", completed: true, assignedTo: "Rahul" },
          { title: "Booking System", completed: true, assignedTo: "Jeet" }
        ]
      },
      {
        _id: 3,
        name: "Bank Management",
        status: "Active",
        createdAt: new Date(),
        tasks: [
          { title: "Account Creation", completed: true, assignedTo: "Rahul" },
          { title: "Transaction Module", completed: false, assignedTo: "Jeet" }
        ]
      }
    ];



// Insert sample projects into MongoDB

await projects.deleteMany({});
await projects.insertMany(sampleProjects);

// Find all active projects where at least one task is not completed

const activeProjects = await projects.find({
  status: "Active",
  tasks: {
    $elemMatch: {
      completed: false
    }
  }
}).toArray();

console.log(activeProjects);

// Aggregation pipeline to group projects by status

const report = await projects.aggregate([
  { $unwind: "$tasks" },
  {
    $group: {
      _id: "$status",
      totalProjects: { $addToSet: "$_id" },
      totalTasks: { $sum: 1 },
      completedTasks: {
        $sum: {
          $cond: ["$tasks.completed", 1, 0]
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      status: "$_id",
      totalProjects: { $size: "$totalProjects" },
      totalTasks: 1,
      completedTasks: 1
    }
  }
]).toArray();

console.log(report);


 // Check project in Redis first

async function getProject(id) {

  const cacheKey = `project:${id}`;

  const cachedData = await redisClient.get(cacheKey);

  // If project is found in Redis

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  // Get project from MongoDB
  const project = await projects.findOne({ _id: id });

  // Save project in Redis for 5 minutes

  if (project) {
    await redisClient.set(
      cacheKey,
      JSON.stringify(project),
      { EX: 300 }
    );
  }

  return project;
}

console.log(await getProject(1));

}  catch (error) {

  // Print error

  console.log(error);

} finally {

  // Close MongoDB and Redis connections

  await mongoClient.close();
  await redisClient.quit();

}
}

main();