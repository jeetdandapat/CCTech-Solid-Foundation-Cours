import request from "supertest";
import app from "../app.js";

describe("Project API", () => {
  describe("GET /projects", () => {
    it("should return all projects when the project list is requested", async () => {
      // Arrange
      // No  needed .

      // Act
      const response = await request(app).get("/projects");

      // Assert
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty("name");
      expect(response.body[0]).toHaveProperty("status");
    });
  });

  describe("GET /projects/:id", () => {
    it("should return the project when a valid project ID is given", async () => {
      // Arrange
      const projectId = 1;

      // Act
      const response = await request(app).get(`/projects/${projectId}`);

      // Assert
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(projectId);
      expect(response.body.name).toBe("TravelHalt");
      expect(response.body.status).toBe("active");
    });

    it("should return 404 when the requested project ID does not exist", async () => {
      // Arrange
      const missingProjectId = 999;

      // Act
      const response = await request(app).get(
        `/projects/${missingProjectId}`
      );

      // Assert
      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Project not found");
    });
  });

  describe("POST /projects", () => {
    it("should create a project when valid name and status are given", async () => {
      // Arrange
      const projectData = {
        name: "Bank Management System",
        status: "planning",
      };

      // Act
      const response = await request(app)
        .post("/projects")
        .send(projectData);

      // Assert
      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({
        name: "Bank Management System",
        status: "planning",
      });
      expect(response.body).toHaveProperty("id");
    });

    it("should return 400 when project name is missing", async () => {
      // Arrange
      const invalidProjectData = {
        status: "active",
      };

      // Act
      const response = await request(app)
        .post("/projects")
        .send(invalidProjectData);

      // Assert
      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Name is required");
    });

    it("should return 400 when project status is not a string", async () => {
      // Arrange
      const invalidProjectData = {
        name: "Invalid Status Project",
        status: 100,
      };

      // Act
      const response = await request(app)
        .post("/projects")
        .send(invalidProjectData);

      // Assert
      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Status must be a string");
    });
  });

  describe("PATCH /projects/:id/status", () => {
    it("should update status when a valid project ID and status are given", async () => {
      // Arrange
      const projectId = 1;
      const updateData = {
        status: "completed",
      };

      // Act
      const response = await request(app)
        .patch(`/projects/${projectId}/status`)
        .send(updateData);

      // Assert
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(projectId);
      expect(response.body.status).toBe("completed");
    });

    it("should return 404 when updating status for a project that does not exist", async () => {
      // Arrange
      const missingProjectId = 999;
      const updateData = {
        status: "active",
      };

      // Act
      const response = await request(app)
        .patch(`/projects/${missingProjectId}/status`)
        .send(updateData);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Project not found");
    });

    it("should return 400 when the new status is empty", async () => {
      // Arrange
      const projectId = 1;
      const invalidUpdateData = {
        status: "",
      };

      // Act
      const response = await request(app)
        .patch(`/projects/${projectId}/status`)
        .send(invalidUpdateData);

      // Assert
      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "Status is required and must be a string"
      );
    });
  });
});