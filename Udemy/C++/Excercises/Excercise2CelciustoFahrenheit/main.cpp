#include <iostream>

int main()
{
    float celcius;
    float fahrenheit;
    int option;
    std::cout << "select one of the following options" << std::endl;
    std::cout << "1.- convert temperature F to C" << std::endl;
    std::cout << "2.- convert temperature C to F" << std::endl;
    std::cin >> option;
    std::cout << std::endl;
    if (option == 1)
    {
        std::cout << "Enter the temperature in F" << std::endl;
        std::cin >> fahrenheit;
        std::cout << std::endl;
        celcius = (fahrenheit - 32) * (5.0 / 9);
        std::cout << fahrenheit << " F = " << celcius << " C " << std::endl;
        return 0;
    }
    else if (option == 2)
    {
        std::cout << "Enter the temperature in C" << std::endl;
        std::cin >> celcius;
        std::cout << std::endl;
        fahrenheit = (9.0 / 5) * celcius + 32;
        std::cout << celcius << " C = " << fahrenheit << " F " << std::endl;
        return 0;
    }
    else
    {
        std::cout << "option not valid;" << std::endl;
        return 0;
    }
}