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

class Circle : public Shape
{
private:
    double radius;

public:
    Circle(double r);

    double area() const override;

    double perimeter() const override;

    void describe() const override;
};

class Rectangle : public Shape
{
private:
    double length;
    double width;

public:
    Rectangle(double l, double w);

    double area() const override;

    double perimeter() const override;

    void describe() const override;
};

class Triangle : public Shape
{
private:
    double base;
    double height;

public:
    Triangle(double b, double h);

    double area() const override;

    double perimeter() const override;

    void describe() const override;
};