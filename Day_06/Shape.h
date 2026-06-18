#pragma once

#include <iostream>

class Shape
{
public:
    virtual double area() const = 0;
    virtual double perimeter() const = 0;
    virtual void describe() const = 0;

    virtual ~Shape() = default;
};