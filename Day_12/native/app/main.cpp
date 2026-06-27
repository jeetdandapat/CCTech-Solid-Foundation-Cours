#include <algorithm>
#include <memory>
#include <vector>

#include "Shape.h"

int main()
{
    std::vector<std::unique_ptr<Shape>> shapes;

    shapes.push_back(std::make_unique<Circle>(5));
    shapes.push_back(std::make_unique<Rectangle>(12, 10));
    shapes.push_back(std::make_unique<Triangle>(20, 12));

    std::sort(
        shapes.begin(),
        shapes.end(),
        [](const std::unique_ptr<Shape>& a,
           const std::unique_ptr<Shape>& b)
        {
            return a->area() < b->area();
        });

    for (const auto& shape : shapes)
    {
        shape->describe();
    }

    auto it = std::find_if(
        shapes.begin(),
        shapes.end(),
        [](const std::unique_ptr<Shape>& shape)
        {
            return shape->area() > 100;
        });

    if (it != shapes.end())
    {
        std::cout << "\nFirst Shape With Area > 100\n";
        (*it)->describe();
    }
    else
    {
        std::cout << "\nNo Shape With Area > 100\n";
    }

    return 0;
}