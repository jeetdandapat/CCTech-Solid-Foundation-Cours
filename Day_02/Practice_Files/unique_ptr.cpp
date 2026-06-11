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
    // create Student object and manager
    auto student1 = make_unique<Student>();

    cout << "student1 is the owner" << endl;

    // transfer ownership
    auto student2 = move(student1);

    cout << "ownership transferred to student2" << endl;

    // check student1
    if (student1 == nullptr)
    {
        cout << "student1 is empty" << endl;
    }

    // check student2
    if (student2 != nullptr)
    {
        cout << "student2 is the owner" << endl;
    }

    return 0;
}