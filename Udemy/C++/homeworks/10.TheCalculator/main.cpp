#include <iostream>
#include <ctime>

int main()
{

    int number_1{0};
    int number_2{0};
    int operation{0};
    char operation_sign;
    int result{0};
    int answer{0};
    char go_on;
    bool finish{false};
    std::cout << "Welcome to the greatest calculator on Earth! " << std::endl;
    std::srand(std::time(0));
    while (!finish)
    {
        number_1 = std::rand() % 200;
        number_2 = std::rand() % 200;
        operation = std::rand() % 3;
        std::cout << operation << std::endl;

        switch (operation)
        {
        case 0:
            operation_sign = '+';
            result = number_1 + number_2;
            break;
        case 1:
            operation_sign = '-';
            result = number_1 - number_2;
            break;
        case 2:
            operation_sign = '*';
            result = number_1 * number_2;
            break;
        }
        std::cout << "What's the result of " << number_1 << " " << operation_sign << " " << number_2 << " : ";
        std::cin >> answer;
        if (answer == result)
        {
            std::cout << "Congratulations! you got the result " << answer << " right!" << std::endl;
        }
        else
        {
            std::cout << "Naah! the correct result is : " << result << std::endl;
        }

        std::cout << "Do you want to play again? (Y/N) : ";
        std::cin >> go_on;

        finish = ((go_on == 'Y') || (go_on == 'y')) ? false : true;
    }
    std::cout << "Pee you later!" << std::endl;

    return 0;
}