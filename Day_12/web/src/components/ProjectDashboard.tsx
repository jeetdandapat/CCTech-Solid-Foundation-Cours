import { useEffect, useReducer, useState } from "react";
import {createProject,getProjects,updateProjectStatus,type Project} from "../api/projectApi";
import type { SyntheticEvent } from "react";
interface ProjectState {
  projects: Project[];
  loading: boolean;
  error: string;
}

type ProjectAction =
  | { type: "LOAD_START" }
  | { type: "LOAD_SUCCESS"; payload: Project[] }
  | { type: "LOAD_ERROR"; payload: string };

const initialState: ProjectState = {
  projects: [],
  loading: true,
  error: ""
};

function projectReducer(state: ProjectState,action: ProjectAction): ProjectState {
  switch (action.type) {
    case "LOAD_START":
      return {...state,loading: true,error: ""};

    case "LOAD_SUCCESS":
      return {...state, loading: false,projects: action.payload};

    case "LOAD_ERROR":
      return {...state,loading: false,error: action.payload};

    default:
      return state;
  }
}

export default function ProjectDashboard() {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const [projectName, setProjectName] = useState("");
  const [projectStatus, setProjectStatus] = useState("active");

  const loadProjects = async () => {
    dispatch({ type: "LOAD_START" });

    try {
      const projects = await getProjects();

      dispatch({
        type: "LOAD_SUCCESS",
        payload: projects
      });
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to load projects";

      dispatch({
        type: "LOAD_ERROR",
        payload: message
      });
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

 const handleCreateProject = async (
  event: SyntheticEvent<HTMLFormElement>
) => {
  event.preventDefault();


    if (!projectName.trim()) {
      alert("Project name is required");
      return;
    }

    try {
      await createProject({
        name: projectName,
        status: projectStatus
      });

      setProjectName("");
      setProjectStatus("active");

      await loadProjects();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to create project";

      alert(message);
    }
  };

  const handleStatusUpdate = async (id: number) => {
    const newStatus = prompt("Enter new status: active or completed");

    if (!newStatus || !newStatus.trim()) {
      return;
    }

    try {
      await updateProjectStatus(id, newStatus);

      await loadProjects();
    } catch (error: unknown) {
      const message = error instanceof Error
          ? error.message
          : "Failed to update project status";

      alert(message);
    }
  };

  if (state.loading) {
    return <h2>Loading projects...</h2>;
  }

  if (state.error) {
    return (
      <div>
        <h2>{state.error}</h2>
        <button onClick={loadProjects}>Try Again</button>
      </div>
    );
  }

  return (
  <div>
    <h1>Project Dashboard</h1>

    <form onSubmit={handleCreateProject}>
      <h3>Create New Project</h3>

      <input
        type="text"
        placeholder="Enter project name"
        value={projectName}
        onChange={(event) => setProjectName(event.target.value)}
      />

      <select
        value={projectStatus}
        onChange={(event) => setProjectStatus(event.target.value)}
      >
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit">Create Project</button>
    </form>

    <hr />

    <h2>All Projects</h2>

    {state.projects.length === 0 ? (
      <p>No projects found.</p>
    ) : (
      state.projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>Status: {project.status}</p>

          <button onClick={() => handleStatusUpdate(project.id)}>
            Update Status
          </button>
        </div>
      ))
    )}
  </div>
);
}