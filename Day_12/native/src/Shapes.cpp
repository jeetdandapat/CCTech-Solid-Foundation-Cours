#include <cmath>
#include "Shape.h"

Circle::Circle(double r)
    : radius(r)
{
}

double Circle::area() const
{
    return 3.14159 * radius * radius;
}

double Circle::perimeter() const
{
    return 2 * 3.14159 * radius;
}

void Circle::describe() const
{
    std::cout << "Circle | Area: "
              << area()
              << " | Perimeter: "
              << perimeter()
              << '\n';
}

Rectangle::Rectangle(double l, double w)
    : length(l), width(w)
{
}

double Rectangle::area() const
{
    return length * width;
}

double Rectangle::perimeter() const
{
    return 2 * (length + width);
}

void Rectangle::describe() const
{
    std::cout << "Rectangle | Area: "
              << area()
              << " | Perimeter: "
              << perimeter()
              << '\n';
}

Triangle::Triangle(double b, double h)
    : base(b), height(h)
{
}

double Triangle::area() const
{
    return 0.5 * base * height;
}

double Triangle::perimeter() const
{
    return base + height + std::sqrt(base * base + height * height);
}

void Triangle::describe() const
{
    std::cout << "Triangle | Area: "
              << area()
              << " | Perimeter: "
              << perimeter()
              << '\n';
}