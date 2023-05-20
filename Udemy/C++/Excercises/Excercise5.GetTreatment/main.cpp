#include <iostream>

int main()
{
    // the objective of this program is to use the if else if flow control. thats why the && || logical operators ara prohibited
    int age{0};
    std::cout << "Welcome to the chonitas medical research center " << std::endl;
    std::cout << "Please enter your age to see if you are candidate for our treatment " << std::endl;
    std::cin >> age;
    if (age < 21)
    {
        std::cout << "Sorry you are too young for the treatment " << std::endl;
    }
    else if (age > 39)
    {
        std::cout << "Sorry you are too old for the treatment " << std::endl;
    }
    else
    {
        std::cout << "Congratulations you are eligible for the treatment " << std::endl;
    }
}