#include <iostream>
#include <memory>

#include "Circle.cpp"

int main()
{
    std::unique_ptr<Shape> shape(new Circle(5));

    std::cout << "Area = " << shape->area() << std::endl;
    std::cout << "Perimeter = " << shape->perimeter() << std::endl;

    return 0;
}