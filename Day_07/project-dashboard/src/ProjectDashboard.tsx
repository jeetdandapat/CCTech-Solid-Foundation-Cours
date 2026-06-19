import { useState } from "react";

interface Project {
  id: number;
  name: string;
  status: string;
}

interface Props {
  projects: Project[];
  onStatusChange: (id: number, status: string) => void;
}

function useProjectFilter(
  projects: Project[],
  status: string
): Project[] {

  if (status === "All") {
    return projects;
  }

  return projects.filter(
    (project) => project.status === status
  );
}

function ProjectDashboard({
  projects,
  onStatusChange,
}: Props) {

  const [selectedStatus, setSelectedStatus] =
    useState("All");

  const filteredProjects =
    useProjectFilter(
      projects,
      selectedStatus
    );

  const handleToggleStatus = (
    project: Project
  ) => {

    const newStatus =
      project.status === "Active"
        ? "Completed"
        : "Active";

    onStatusChange(
      project.id,
      newStatus
    );
  };

  return (
    <div>
      <h2>Project Dashboard</h2>

      <label htmlFor="statusFilter">
        Filter By Status:
      </label>

      <select
        id="statusFilter"
        value={selectedStatus}
        onChange={(event) =>
          setSelectedStatus(event.target.value)
        }
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
      </select>

      {filteredProjects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>

          <p>Status: {project.status}</p>

          <button
            onClick={() =>
              handleToggleStatus(project)
            }
          >
            Toggle Status
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProjectDashboard;