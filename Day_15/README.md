
## Step 1 – Register the Command

First, I will register a new command called **DRAWBOX**.

When the plugin is loaded, AutoCAD will recognize this command.

```
Load Plugin

↓

Register DRAWBOX

↓

Command Ready
```

---

## Step 2 – Get the First Point

When the user runs **DRAWBOX**, I will ask the user to select the first corner.

I will use **acedGetPoint()** to get the first point.

```
Run DRAWBOX

↓

Select First Point

↓

Save Point 1
```

---

## Step 3 – Get the Second Point

Next, I will ask the user to select the second corner.

Again, I will use **acedGetPoint()** to get the second point.

```
Select Second Point

↓

Save Point 2
```

---

## Step 4 – Calculate the Rectangle

Now I have two opposite corner points.

Using these points, I will calculate the remaining two corners of the rectangle.

```
Point 1 + Point 2

↓

Calculate Point 3

↓

Calculate Point 4
```

---

## Step 5 – Start Transaction

Before modifying the drawing, I will start a transaction.

```
Start Transaction

↓

Ready to Modify Drawing
```

---

## Step 6 – Create the Rectangle

I will use **AcDbPolyline** to create the rectangle.

I will add four vertices and close the polyline.

```
Create AcDbPolyline

↓

Add Four Vertices

↓

Close Polyline
```

---

## Step 7 – Add the Rectangle to Model Space

I will open the **Model Space Record (AcDbBlockTableRecord)** and append the polyline.

```
Open Model Space Record

↓

Append Polyline

↓

Rectangle Added
```

---

## Step 8 – Commit Transaction

If everything is successful, I will commit the transaction.

```
Commit Transaction

↓

Drawing Updated
```

---

## Step 9 – ObjectId

After the rectangle is added to the drawing, AutoCAD automatically assigns an **AcDbObjectId**.

This ObjectId can be used later to open, edit, or delete the rectangle.

```
Rectangle Added

↓

ObjectId Assigned

↓

Future Access
```

---

## Step 10 – If the User Presses ESC

If the user presses **ESC** before the command finishes:

- The command is cancelled.
- The transaction is aborted.
- All changes are rolled back.
- No rectangle is created.
- All opened objects are closed.
- Temporary resources are cleaned up.

```
ESC

↓

Command Cancelled

↓

Abort Transaction

↓

Rollback

↓

Close Opened Objects

↓

Cleanup

↓

No Changes Saved
```

## Step 11 – Cleanup

Finally, I will close all opened objects and clean up any temporary resources.

```
Close Objects

↓

Release Resources

↓

Command Finished
```

---

# Pseudo Code

```
Register DRAWBOX Command

User Runs DRAWBOX

Get First Point

Get Second Point

Calculate Remaining Two Corners

Start Transaction

Create AcDbPolyline

Add Four Vertices

Close Polyline

Open Model Space Record

Append Polyline

AutoCAD Assigns ObjectId

Commit Transaction

Finish
```