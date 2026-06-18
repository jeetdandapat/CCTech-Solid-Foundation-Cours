#include <cmath>
#include "Shape.h"

class Circle : public Shape
{
private:
    double radius;

public:
    Circle(double r)
        : radius(r)
    {
    }

    double area() const override
    {
        return 3.14159 * radius * radius;
    }

    double perimeter() const override
    {
        return 2 * 3.14159 * radius;
    }

    void describe() const override
    {
        std::cout << "Circle | Area: "
                  << area()
                  << " | Perimeter: "
                  << perimeter()
                  << '\n';
    }
};

class Rectangle : public Shape
{
private:
    double length;
    double width;

public:
    Rectangle(double l, double w)
        : length(l), width(w)
    {
    }

    double area() const override
    {
        return length * width;
    }

    double perimeter() const override
    {
        return 2 * (length + width);
    }

    void describe() const override
    {
        std::cout << "Rectangle | Area: "
                  << area()
                  << " | Perimeter: "
                  << perimeter()
                  << '\n';
    }
};

class Triangle : public Shape
{
private:
    double base;
    double height;

public:
    Triangle(double b, double h)
        : base(b), height(h)
    {
    }

    double area() const override
    {
        return 0.5 * base * height;
    }

    double perimeter() const override
    {
        return base + height + std::sqrt(base * base + height * height);
    }

    void describe() const override
    {
        std::cout << "Triangle | Area: "
                  << area()
                  << " | Perimeter: "
                  << perimeter()
                  << '\n';
    }
};