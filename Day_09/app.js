import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});


let projects = [
  {
    id: 1,
    name: "TravelHalt",
    status: "active",
  },
  {
    id: 2,
    name: "Women Safety App",
    status: "completed",
  },
];


app.get("/projects", (req, res) => {
  try {
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});



app.post("/projects", (req, res) => {
  try {
    const { name, status } = req.body;

    if (typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({
        message: "Name is required",
      });
    }

    if (status !== undefined && typeof status !== "string") {
      return res.status(400).json({
        message: "Status must be a string",
      });
    }

    const newProject = {
      id: projects.length + 1,
      name: name.trim(),
      status: status ? status.trim() : "active",
    };

    projects.push(newProject);

    return res.status(201).json(newProject);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});


app.get("/projects/:id", (req, res) => {
  try {
    const id = Number(req.params.id);

    const project = projects.find((project) => project.id === id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});


app.patch("/projects/:id/status", (req, res) => {
  try {
    const id = Number(req.params.id);
    const { status } = req.body;

    if (typeof status !== "string" || status.trim() === "") {
      return res.status(400).json({
        message: "Status is required and must be a string",
      });
    }

    const project = projects.find((project) => project.id === id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    project.status = status.trim();

    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});