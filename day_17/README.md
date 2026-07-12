# Revit API Code Reading Analysis

## Sample Name

CreateBeamsColumnsBraces

---

## 1. What element types does it create?

The sample creates the following structural elements:

- Beams
- Columns
- Braces

---

## 2. What transaction name is used?

Transaction Name:

CreateBeamsColumnsBraces

The sample starts a transaction with the name:

"CreateBeamsColumnsBraces"

The transaction is used to create structural elements inside the Revit model.

---

## 3. What would happen if Commit() is missing?

If Commit() is missing, the transaction is not completed.

As a result:

- No changes are saved.
- No Beam is created.
- No Column is created.
- No Brace is created.
- The Revit model remains unchanged.

Commit() is required to permanently save all modifications to the Revit model.

---

## 4. Which Revit built-in categories are involved?

The sample uses the following Revit built-in categories:

- Structural Framing
- Structural Columns

Structural Framing contains:

- Beam
- Brace

Structural Columns contains:

- Column

---

## 5. Parallel Plan for a Web Equivalent using APS

If the same structural data (Beams and Columns) had to be exposed through a REST API using Autodesk Platform Services (APS), the workflow would be:

Step 1

Get Access Token

Purpose:
Authenticate the application and receive an APS Access Token.

↓

Step 2

Upload Model

API:
Object Storage Service (OSS)

Purpose:
Upload the Revit model to APS Cloud Storage.

↓

Step 3

Translate Model

API:
Model Derivative API

Purpose:
Convert the Revit model into a browser-supported format.

↓

Step 4

Check Manifest

API:
Model Derivative API

Purpose:
Check whether the translation has completed successfully.

↓

Step 5

Get Model Metadata

Purpose:
Retrieve model information from the translated model.

↓

Step 6

Get Model Properties

Purpose:
Read structural properties such as Beams and Columns.

↓

Step 7

Return Data through REST API

Purpose:
Return Beam and Column data as a JSON response to the client application.

---

## APS Workflow

Get Access Token

↓

Upload Model

↓

Translate Model

↓

Check Manifest

↓

Get Metadata

↓

Get Properties

↓

Return Beam and Column Data

---

