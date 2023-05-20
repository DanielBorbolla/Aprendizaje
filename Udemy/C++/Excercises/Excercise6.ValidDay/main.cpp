#include <iostream>

int main()
{
    int day{0};
    std::cout << "Which day is today: " << std::endl;
    std::cout << "1: Monday " << std::endl;
    std::cout << "2: Tuesday " << std::endl;
    std::cout << "3: Wednesday " << std::endl;
    std::cout << "4: Thursday " << std::endl;
    std::cout << "5: Friday " << std::endl;
    std::cout << "6: Saturday " << std::endl;
    std::cout << "7: Sunday " << std::endl;
    std::cin >> day;

    switch (day)
    {
    case 1:
        std::cout << "Today is Monday " << std::endl;
        break;
    case 2:
        std::cout << "Today is Tuesday " << std::endl;
        break;
    case 3:
        std::cout << "Today is Wednesday " << std::endl;
        break;
    case 4:
        std::cout << "Today is Thursday " << std::endl;
        break;
    case 5:
        std::cout << "Today is Friday " << std::endl;
        break;
    case 6:
        std::cout << "Today is Saturday " << std::endl;
        break;
    case 7:
        std::cout << "Today is Sunday " << std::endl;
        break;
    default:
        std::cout << day << "  is not a day of the week " << std::endl;
        return 0;
    }

    std::cout << day * day << std::endl;
    return 0;
}