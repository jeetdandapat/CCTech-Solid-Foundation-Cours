# Day 2 - C++ Types, References, Const and Ownership

## Topics Studied

* Raw Pointers (T*)
* References (T&)
* Const References (const T&)
* Const Correctness
* std::unique_ptr
* std::shared_ptr
* Ownership Semantics
* Ownership Transfer using std::move()



## Folder Structure

```text
Day_02
│
├── README.md
├── ownership_demo.cpp
│
└── Practice_Files
   
```

## What I Learned

* Understanding raw pointers and memory addresses
* Using references and const references
* Applying const correctness
* Managing ownership with std::unique_ptr
* Shared ownership with std::shared_ptr
* Ownership transfer using std::move()
* Automatic memory management using smart pointers

## Ownership Demonstration

Implemented a Resource class that:

* Prints "acquired" on construction
* Prints "released" on destruction
* Uses std::unique_ptr for ownership
* Transfers ownership using std::move()
* Uses take(const Resource&) for read-only access

## Output

acquired

resource accessed

ptr1 is empty

ptr2 owns the resource

released
