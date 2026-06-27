# Prerequisites

* CMake 3.20 or later
* C++20 compatible compiler
* Google Test
* Git

# Build steps

```bash
cmake -S . -B build
cmake --build build
```

# How to run tests

```bash
cd build
ctest
```
