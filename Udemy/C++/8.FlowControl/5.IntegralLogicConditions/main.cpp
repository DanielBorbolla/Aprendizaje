#include <iostream>

int main()
{

    int condition{0};

    bool bool_condition = condition;
    std::cout << std::boolalpha;

    if (condition)
    {
        std::cout << "We have a " << condition << " in our variable and it gives us True" << std::endl; // different from 0
    }
    else
    {
        std::cout << "We have " << condition << " in our variable and it gives us False" << std::endl; // zero
    }

    return 0;
}