#include <iostream>

int main()
{
    int number{0};
    std::cout << "Please type a whole number: " << std::endl;
    std::cin >> number;
    if (number % 2 == 0)
    {
        std::cout << number << " is even " << std::endl;
    }
    else
    {
        std::cout << number << " is odd " << std::endl;
    }
    return 0;
}