#include <iostream>
#include <memory>

using namespace std;

class Student
{
public:
    Student()
    {
        cout << "Student Object Created" << endl;
    }

    ~Student()
    {
        cout << "Student Object Destroyed" << endl;
    }
};

int main()
{
    // create shared object
    auto student1 = make_shared<Student>();

    // first owner count
    cout << "Owner Count : "
         << student1.use_count()
         << endl;

    // create second owner
    auto student2 = student1;

    cout << "Owner Count : "
         << student1.use_count()
         << endl;

    // create third owner
    auto student3 = student1;

    cout << "Owner Count : "
         << student1.use_count()
         << endl;

    return 0;
}