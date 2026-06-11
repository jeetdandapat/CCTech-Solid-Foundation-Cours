#include <iostream>      // for cout
#include <memory>        // for unique_ptr and make_unique

using namespace std;     // use standard library names

// Resource class
class Resource
{
public:

    // constructor runs when object is created
    Resource()
    {
        cout << "acquired" << endl;
    }

    // destructor runs when object is destroyed
    ~Resource()
    {
        cout << "released" << endl;
    }
};

// function receives resource by const reference
// function can read but does not own the object
void take(const Resource& r)
{
    cout << "resource accessed" << endl;
}

int main()
{
    // create Resource object on heap
    // ptr1 becomes the owner
    unique_ptr<Resource> ptr1 = make_unique<Resource>();

    // access resource without taking ownership
    take(*ptr1);

    // transfer ownership from ptr1 to ptr2
    unique_ptr<Resource> ptr2 = move(ptr1);

    // check if ptr1 lost ownership
    if (ptr1 == nullptr)
    {
        cout << "ptr1 is empty" << endl;
    }

    // ptr2 is now the owner
    cout << "ptr2 owns the resource" << endl;

    // scope ends here
    // ptr2 will be destroyed automatically
    // Resource will be released automatically

    return 0;
}