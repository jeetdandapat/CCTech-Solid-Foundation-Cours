import ProjectDashboard from "./ProjectDashboard";

function App() {
  const projects = [
    {
      id: 1,
      name: "TravelHalt",
      status: "Active",
    },
    {
      id: 2,
      name: "Vibezilla",
      status: "Completed",
    },
  ];

  const handleStatusChange = (
    id: number,
    status: string
  ) => {
    console.log(id, status);
  };

  return (
    <ProjectDashboard
      projects={projects}
      onStatusChange={handleStatusChange}
    />
  );
}

export default App;