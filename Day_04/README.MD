# Day 04 - Spec-Driven Development (SDD) and OpenAPI 3.0

## Topics Covered

* What Spec-Driven Development (SDD) is
* OpenAPI 3.0 Specification
* Paths and Operations
* Request Bodies
* Responses
* Schemas
* Reading OpenAPI YAML Files
* Components and Reusable Schemas
* $ref Usage
* oneOf, allOf, required, nullable
* Designing APIs before Writing Code

---

## What I Learned

### Spec-Driven Development (SDD)

I learned that in Spec-Driven Development, we write the API contract first and implement the code later. This allows frontend and backend developers to work in parallel without waiting for each other.

### OpenAPI 3.0

I learned how OpenAPI is used to describe APIs using YAML files. It helps developers understand an API without running any code.

### Paths and Operations

I learned how API endpoints are defined using paths and operations such as:

* GET
* POST
* PATCH

Example:

* GET /projects
* POST /projects
* GET /projects/{id}
* PATCH /projects/{id}/status

### Request Bodies and Responses

I learned how clients send data using request bodies and how servers return data using responses.

### Schemas

I learned how schemas define the structure of data and how types such as string, integer, and boolean are used.

### Reusable Schemas and $ref

I learned how to create reusable schemas inside components/schemas and reuse them using $ref to avoid duplication.

### Reading OpenAPI YAML Files

I learned how to read a complete API specification and understand endpoints, requests, responses, and schemas without running a single line of code.

### oneOf, allOf, required, nullable

I learned how OpenAPI represents more complex data models:

* oneOf = one schema can be used
* allOf = combine multiple schemas
* required = mandatory fields
* nullable = value can be null

### API Contract

I learned that an OpenAPI specification acts as a contract between frontend and backend teams, ensuring both sides agree on API behavior before implementation begins.

---

## Practical Work

Created an OpenAPI 3.0 YAML specification file for a Projects API containing:

* GET /projects
* POST /projects
* GET /projects/{id}
* PATCH /projects/{id}/status

Created reusable schemas:

* Project
* Task
* ErrorResponse

Used:

* Typed parameters
* Typed request bodies
* Response schemas
* Error responses
* $ref references

---

## Resources Studied

* OpenAPI Basic Structure Documentation
* OpenAPI Paths and Operations Documentation
* OpenAPI Request Body Documentation
* OpenAPI Data Models (Schemas) Documentation

---

## Outcome

By the end of Day 04, I can read and understand OpenAPI specifications, design APIs using YAML, create reusable schemas, and build API contracts before implementation.
