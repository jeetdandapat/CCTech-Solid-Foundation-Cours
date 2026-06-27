#include <gtest/gtest.h>

#include <algorithm>
#include <memory>
#include <vector>

#include "Shape.h"          

// Circle tests

TEST(CircleTest, AreaWorks)
{
    // Arrange
    Circle circle(5);

    // Act
    double result = circle.area();

    // Assert
    EXPECT_NEAR(result, 78.53975, 0.001);
}

TEST(CircleTest, PerimeterWorks)
{
    // Arrange
    Circle circle(5);

    // Act
    double result = circle.perimeter();

    // Assert
    EXPECT_NEAR(result, 31.4159, 0.001);
}

// Rectangle tests

TEST(RectangleTest, AreaWorks)
{
    // Arrange
    Rectangle rectangle(12, 10);

    // Act
    double result = rectangle.area();

    // Assert
    EXPECT_DOUBLE_EQ(result, 120);
}

TEST(RectangleTest, PerimeterWorks)
{
    // Arrange
    Rectangle rectangle(12, 10);

    // Act
    double result = rectangle.perimeter();

    // Assert
    EXPECT_DOUBLE_EQ(result, 44);
}

// Triangle tests

TEST(TriangleTest, AreaWorks)
{
    // Arrange
    Triangle triangle(20, 12);

    // Act
    double result = triangle.area();

    // Assert
    EXPECT_DOUBLE_EQ(result, 120);
}

TEST(TriangleTest, PerimeterWorks)
{
    // Arrange
    Triangle triangle(20, 12);

    // Act
    double result = triangle.perimeter();

    // Assert
    EXPECT_NEAR(result, 55.3238, 0.001);
}

// Sort test

TEST(ShapeSortTest, SortByAreaWorks)
{
    // Arrange
    std::vector<std::unique_ptr<Shape>> shapes;

    shapes.push_back(std::make_unique<Rectangle>(12, 10));
    shapes.push_back(std::make_unique<Circle>(5));
    shapes.push_back(std::make_unique<Triangle>(20, 12));

    // Act
    std::sort(
        shapes.begin(),
        shapes.end(),
        [](const std::unique_ptr<Shape>& first,
           const std::unique_ptr<Shape>& second)
        {
            return first->area() < second->area();
        });

    // Assert
    EXPECT_NEAR(shapes.front()->area(), 78.53975, 0.001);
}

// Edge case tests

TEST(CircleTest, ZeroRadiusWorks)
{
    // Arrange
    Circle circle(0);

    // Act
    double area = circle.area();
    double perimeter = circle.perimeter();

    // Assert
    EXPECT_DOUBLE_EQ(area, 0);
    EXPECT_DOUBLE_EQ(perimeter, 0);
}

TEST(RectangleTest, ZeroWidthWorks)
{
    // Arrange
    Rectangle rectangle(10, 0);

    // Act
    double result = rectangle.area();

    // Assert
    EXPECT_DOUBLE_EQ(result, 0);
}