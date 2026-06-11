#include <iostream>
using namespace std;

// const value parameter
void showValue(const int x)
{
    cout << x << endl;
}

// const reference parameter
void showReference(const int& x)
{
    cout << x << endl;
}

int main()
{
    // normal variable
    int a = 10;

    a = 20;

    // const variable
    const int b = 50;

    // const reference
    int c = 30;
    const int& ref = c;

    c = 40;

    // function call with const value
    showValue(a);

    // function call with const reference
    showReference(a);

    return 0;
}