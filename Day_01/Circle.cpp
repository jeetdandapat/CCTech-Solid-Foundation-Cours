#include "Shape.h"

class Circle : public Shape
{
    double radius;

public:
    Circle(double r)
    {
        radius = r;
    }

    double area() const
    {
        return 3.14 * radius * radius;
    }

    double perimeter() const
    {
        return 2 * 3.14 * radius;
    }
};