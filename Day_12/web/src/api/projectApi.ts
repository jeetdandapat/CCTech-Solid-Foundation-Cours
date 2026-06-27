export interface Project {
  id: number;
  name: string;
  status: string;
}

export interface CreateProjectData {
  name: string;
  status: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// GET: Get all projects
export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${BASE_URL}/projects`);

  if (!response.ok) {
    throw new Error("Failed to load projects");
  }

  return response.json();
}

// POST: Create a new project
export async function createProject(data: CreateProjectData): Promise<Project> {
  const response = await fetch(`${BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Failed to create project");
  }

  return response.json();
}

// PATCH: Update project status
export async function updateProjectStatus(id: number,status: string): Promise<Project> {
  const response = await fetch(`${BASE_URL}/projects/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status })
  });

  if (!response.ok) {
    throw new Error("Failed to update project status");
  }

  return response.json();
}