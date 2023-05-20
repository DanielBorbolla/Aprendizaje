#include <iostream>

int main()
{
    unsigned char letter{65};
    for (size_t i{0}, x{5}, y{22}; y > 15; ++i, x += 5, y -= 1, letter++)
    {
        std::cout << "i: " << i << ", x : " << x << ", y : " << y << std::endl;
        std::cout << letter << std::endl;
    }

    return 0;
}