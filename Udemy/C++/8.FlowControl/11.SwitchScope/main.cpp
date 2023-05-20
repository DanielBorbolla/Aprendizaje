#include <iostream>

int main()
{

    int condition{0};

    int my_var{4};
    std::cout << "Select option 0 or 1" << std::endl;
    std::cin >> condition;

    switch (int data{7}; condition)
    {
        // int x{9}; // Never going to run
        int x;
        int y;
        int z;
        // std::cout << "choose x value" << std::endl;
        // std::cin >> x;
    case 0:

        // int y {5};

        x = 7;
        x++;
        // z =6;
        std::cout << "x : " << x << std::endl;
        std::cout << "Statement1" << std::endl;
        std::cout << "Statement2" << std::endl;
        break;

    case 1:

        my_var++;
        y = 5;
        std::cout << "y : " << y << std::endl;
        std::cout << "x : " << x << std::endl;
        std::cout << "Statement3" << std::endl;
        std::cout << "Statement4" << std::endl;
        break;

    default:
        int u;
        z = 10;
        std::cout << "Statement5" << std::endl;
        std::cout << "Statement6" << std::endl;
        break;
    }
    std::cout << "Moving on..." << std::endl;

    return 0;
}