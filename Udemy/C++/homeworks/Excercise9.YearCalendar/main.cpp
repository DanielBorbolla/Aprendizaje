#include <iostream>
#include <string>

int main()
{
    unsigned int year{0};
    unsigned int first_day{0};
    std::string months[12]{"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
    std::cout << "Enter a Year : ";
    std::cin >> year;
    std::cout << "Enter the first day of the Year : " << std::endl;
    std::cout << "1.Monday " << std::endl;
    std::cout << "2.Tuesday " << std::endl;
    std::cout << "3.Wednesday " << std::endl;
    std::cout << "4.Thursday " << std::endl;
    std::cout << "5.Friday " << std::endl;
    std::cout << "6.Saturday " << std::endl;
    std::cout << "7.Sunday " << std::endl;
    std::cin >> first_day;
    for (std::string month : months)
    {
        std::cout << month << std::endl;
    }
}