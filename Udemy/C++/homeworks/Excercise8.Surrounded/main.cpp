#include <iostream>

int main()
{
    int x{0};
    int y{0};

    std::cout << "Type your x coordinate : " << std::endl;
    std::cin >> x;
    std::cout << "Type your y coordinate : " << std::endl;
    std::cin >> y;
    if ((x > -10 && x < 10) && (y > -5 && y < 5))
    {
        std::cout << "You are completely surrounded. Don't move " << std::endl;
    }
    else
    {
        std::cout << "You're out of reach! " << std::endl;
    }

    return 0;
}