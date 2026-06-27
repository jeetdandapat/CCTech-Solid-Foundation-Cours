cmake_minimum_required(VERSION 3.20)

project(ShapeProject LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_library(ShapeLibrary)

target_sources(ShapeLibrary PRIVATE
    src/Shapes.cpp
)

target_include_directories(ShapeLibrary PUBLIC
    include
)

add_executable(ShapeApp)

target_sources(ShapeApp PRIVATE
    app/main.cpp
)

target_link_libraries(ShapeApp PRIVATE
    ShapeLibrary
)

enable_testing()

find_package(GTest REQUIRED)

add_executable(ShapeTest)

target_sources(ShapeTest PRIVATE
    tests/ShapeTest.cpp
)

target_link_libraries(ShapeTest PRIVATE
    ShapeLibrary
    GTest::gtest
    GTest::gtest_main
)

include(GoogleTest)

gtest_discover_tests(ShapeTest)