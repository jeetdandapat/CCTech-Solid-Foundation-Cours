// Project Interface
interface Project {
    id: number;
    name: string;
    status: "active" | "archived";
    createdAt: Date;
}

// Task Interface
interface Task {
    id: number;
    projectId: number;
    title: string;
    completed: boolean;
}

// Generic Function
function filterByStatus<T extends { status: string }>(
    items: T[],
    status: string
): T[] {
    return items.filter(
        (item) => item.status === status
    );
}

// Group Tasks By Project
function groupTasksByProject(
    tasks: Task[]
): Map<number, Task[]> {
    const groupedTasks: Map<number, Task[]> =
        new Map<number, Task[]>();

    for (const task of tasks) {
        const projectTasks =
            groupedTasks.get(task.projectId);

        if (projectTasks) {
            projectTasks.push(task);
        } else {
            groupedTasks.set(
                task.projectId,
                [task]
            );
        }
    }

    return groupedTasks;
}





// Test Data
/*
const projects: Project[] = [
    {
        id: 1,
        name: "Travelhalt",
        status: "active",
        createdAt: new Date()
    },
    {
        id: 2,
        name: "Old Website",
        status: "archived",
        createdAt: new Date()
    }
];

const tasks: Task[] = [
    {
        id: 1,
        projectId: 1,
        title: "Create Login Page",
        completed: false
    },
    {
        id: 2,
        projectId: 1,
        title: "Create Dashboard",
        completed: true
    },
    {
        id: 3,
        projectId: 2,
        title: "Fix Bug",
        completed: false
    }
];

// Output
console.log("Active Projects:");
console.log(
    filterByStatus(projects, "active")
);

console.log("\nGrouped Tasks:");
console.log(
    groupTasksByProject(tasks)
);
*/