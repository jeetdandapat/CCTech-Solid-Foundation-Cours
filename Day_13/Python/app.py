import json
from dataclasses import dataclass
from typing import List


@dataclass
class Project:
    id: int
    name: str
    status: str


with open("projects.json", "r") as file:
    data = json.load(file)


projects: List[Project] = []

for item in data:
    project = Project(
        id=item["id"],
        name=item["name"],
        status=item["status"]
    )
    projects.append(project)


active_projects: List[Project] = []

for project in projects:
    if project.status == "active":
        active_projects.append(project)


active_projects.sort(key=lambda project: project.name)


print("Active Projects\n")

for project in active_projects:
    print(f"ID : {project.id}")
    print(f"Name : {project.name}")
    print(f"Status : {project.status}")
    print()


output = []

for project in active_projects:
    output.append({
        "id": project.id,
        "name": project.name,
        "status": project.status
    })


with open("active_projects.json", "w") as file:
    json.dump(output, file, indent=4)


print("Filtered projects saved successfully.")