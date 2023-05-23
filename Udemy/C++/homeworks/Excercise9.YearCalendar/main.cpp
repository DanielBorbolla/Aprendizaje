#include <iostream>
#include <string>
#include <iomanip>

int main()
{
    unsigned int year{2020};
    unsigned int first_day{3};
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
    first_day--;
    int number_of_days{30};
    bool leap_year{false};
    if (((year % 4 == 0) && (year % 100 != 0)) || year % 400 == 0)
    {
        leap_year = true;
    }
    for (std::string month : months)
    {
        if (month == "February")
        {
            number_of_days = 28;
            if (leap_year)
                number_of_days++;
        }
        else if ((month == "April") || (month == "June") || (month == "September") || (month == "November"))
        {
            number_of_days = 30;
        }
        else
        {
            number_of_days = 31;
        }
        std::cout << "--" << month << " " << year << " --" << std::endl;
        std::cout << std::setw(5) << "Mon" << std::setw(5) << "Tue" << std::setw(5) << "Wed" << std::setw(5) << "Thu" << std::setw(5) << "Fri" << std::setw(5) << "Sat" << std::setw(5) << "Sun" << std::endl;
        int i{0};

        int today{0};
        while (true)
        {
            if (i < first_day)
            {
                std::cout << std::setw(5) << " ";
                i++;
                continue;
            }
            else
            {
                today++;
                std::cout << std::setw(5) << today;
                i++;
            }
            if (i % 7 == 0)
            {
                std::cout << std::endl;
            }
            if (today == number_of_days)
            {
                first_day = (first_day = i % 7);
                break;
            }
        }
        std::cout << std::endl;
        std::cout << std::endl;
    }
}