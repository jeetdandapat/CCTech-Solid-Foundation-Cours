#include <iostream>
using namespace std;

void update(int& x)
{
    x = 100;
}

int main()
{
    // Example 1
    int a = 10;

    int& ref = a;

    cout << "a = " << a << endl;
    cout << "ref = " << ref << endl;

    // Example 2
    ref = 20;

    cout << "\nAfter ref = 20" << endl;
    cout << "a = " << a << endl;
    cout << "ref = " << ref << endl;

    // Example 3
    a = 50;

    cout << "\nAfter a = 50" << endl;
    cout << "a = " << a << endl;
    cout << "ref = " << ref << endl;

    // Example 4
    update(a);

    cout << "\nAfter update(a)" << endl;
    cout << "a = " << a << endl;
    cout << "ref = " << ref << endl;

    return 0;
}