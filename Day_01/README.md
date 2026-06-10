# Day 1 - C++ Project Anatomy

## Objective

This project demonstrates the basic structure of a C++ project using separate header and source files.

Topics covered:

* Header Files (.h)
* Source Files (.cpp)
* Abstract Classes
* Pure Virtual Functions
* Inheritance
* Virtual Destructor
* Smart Pointers (std::unique_ptr)
* Header Guards (#pragma once)
* Translation Units
* Include Chains

---

## Project Structure

```text
Project/
│
├── Shape.h
├── Circle.cpp
└── main.cpp
```

---

## File Description

### Shape.h

Contains:

* Abstract Shape class
* Pure virtual function area()
* Pure virtual function perimeter()
* Virtual destructor
* Circle class declaration

### Circle.cpp

Contains:

* Circle constructor implementation
* area() implementation
* perimeter() implementation

### main.cpp

Contains:

* Program entry point
* Creation of Circle object using std::unique_ptr
* Printing area and perimeter

---

## Why .h and .cpp are separated

Header files contain declarations.

Source files contain implementations.

Benefits:

* Better code organization
* Easier maintenance
* Faster compilation
* Cleaner project structure
* Easier teamwork in large projects

---

## Header Guard

The project uses:

```cpp
#pragma once
```

Purpose:

* Prevents multiple inclusion of the same header file
* Avoids redefinition errors
* Improves compilation safety

---

## Translation Units and Include Chains

This project uses header inclusion through:

```cpp
#include "Shape.h"
```

During compilation, the preprocessor copies the contents of included header files into the source file.

The compiler then creates a translation unit from the combined source code.

Using:

```cpp
#pragma once
```

ensures that the header file is included only once and prevents multiple definition errors.

This helps maintain a clean and safe compilation process.

---

## OOP Concepts Used

### Abstract Class

Shape is an abstract class because it contains pure virtual functions.

```cpp
virtual double area() const = 0;
virtual double perimeter() const = 0;
```

---

### Inheritance

Circle inherits from Shape.

```cpp
class Circle : public Shape
```

---

### Polymorphism

A Shape pointer is used to access a Circle object.

```cpp
std::unique_ptr<Shape> shape
```

---

## Compilation

### Using g++

```bash
g++ main.cpp Circle.cpp -o app
```

### Run on Windows

```bash
.\app.exe
```

---

## Sample Output

```text
Area = 78.5
Perimeter = 31.4
```

---




## Learning Outcome

After completing this project, I understood:

* How C++ projects are organized
* Difference between declarations and definitions
* Purpose of header files and source files
* Purpose of translation units
* Importance of include chains
* Use of abstract classes and inheritance
* Use of smart pointers
* Importance of header guards
* Basic code navigation in a multi-file C++ project
* How to compile and run a multi-file C++ project using g++
* Why #pragma once is used in header files
