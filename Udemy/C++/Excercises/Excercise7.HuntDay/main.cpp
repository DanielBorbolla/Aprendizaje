#include <iostream>
#include <string>
std::string week_day;
std::string past_day;

std::string get_day(int day_number)
{
    switch (day_number)
    {
    case 1:
        return "Monday";
        break;
    case 2:
        return "Tuesday ";
        break;
    case 3:
        return "Wednesday ";
        break;
    case 4:
        return "Thursday ";
        break;
    case 5:
        return "Friday ";
        break;
    case 6:
        return "Saturday ";
        break;
    case 7:
        return "Sunday ";
        break;
    default:
        std::cout << day_number << "  is not a day of the week " << std::endl;
        return 0;
    }
}

int main()
{
    int day{0};
    int days_passed{0};
    int day_number{0};
    std::cout << "Which day is today: " << std::endl;
    std::cout << "1: Monday " << std::endl;
    std::cout << "2: Tuesday " << std::endl;
    std::cout << "3: Wednesday " << std::endl;
    std::cout << "4: Thursday " << std::endl;
    std::cout << "5: Friday " << std::endl;
    std::cout << "6: Saturday " << std::endl;
    std::cout << "7: Sunday " << std::endl;
    std::cin >> day;
    std::cout << "How many days have passed up to today? :" << std::endl;
    std::cin >> days_passed;
    week_day = get_day(day);
    if (day - (days_passed % 7) > 0)
    {
        day_number = day - (days_passed % 7);
    }
    else
    {
        day_number = 7 + (day - (days_passed % 7));
    }
    past_day = get_day(day_number);
    std::cout << "today is " << week_day << std::endl;
    std::cout << "if we went " << days_passed << " days in the past we would hit a " << past_day << std::endl;
}