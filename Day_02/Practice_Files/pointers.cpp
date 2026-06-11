#include <iostream>
using namespace std;

int main()
{
    int a = 10;

    int* ptr = &a;

    cout << "Address stored in ptr: " << ptr << endl;

    cout << "Value using *ptr: " << *ptr << endl;

    *ptr = 50;

    cout << "New value of a: " << a << endl;

    return 0;
}