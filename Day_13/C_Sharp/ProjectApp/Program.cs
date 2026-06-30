using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

public class Project
{
    public int Id { get; set; }

    public string Name { get; set; } = "";

    public string Status { get; set; } = "";
}

class Program
{
    static void Main()
    {
        string json = File.ReadAllText("projects.json");

        List<Project> projects =
            JsonSerializer.Deserialize<List<Project>>(
                json,
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                }
            ) ?? new List<Project>();

        List<Project> activeProjects = projects
            .Where(project => project.Status == "active")
            .OrderBy(project => project.Name)
            .ToList();

        Console.WriteLine("Active Projects");
        Console.WriteLine();

        foreach (Project project in activeProjects)
        {
            Console.WriteLine("ID : " + project.Id);
            Console.WriteLine("Name : " + project.Name);
            Console.WriteLine("Status : " + project.Status);
            Console.WriteLine();
        }

        string output = JsonSerializer.Serialize(
            activeProjects,
            new JsonSerializerOptions
            {
                WriteIndented = true
            });

        File.WriteAllText("active_projects.json", output);

        Console.WriteLine("Filtered projects saved successfully.");
    }
}