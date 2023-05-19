#include <iostream>

int main()
{

    char value = 65; // ASCCI for 'A'
    std::cout << "value :" << value << std::endl;
    std::cout << "value(int) :" << static_cast<int>(value) << std::endl;

    char character1{'a'};
    char character2{'r'};
    char character3{'r'};
    char character4{'o'};
    char character5{'w'};

    std::cout << character1 << std::endl;
    std::cout << character2 << std::endl;
    std::cout << character3 << std::endl;
    std::cout << character4 << std::endl;
    std::cout << character5 << std::endl;

    // One byte in memory : 2^8 = 256 different values (0 ~ 255)
    std::cout << std::endl;

    char value2 = 65;                                // ASCII character code for 'A'
    std::cout << "value2 : " << value2 << std::endl; // A
    std::cout << "value2(int) : " << static_cast<int>(value2) << std::endl;

    return 0;
}
