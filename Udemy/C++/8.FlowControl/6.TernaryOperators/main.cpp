#include <iostream>

int main()
{

    int max{};

    int a{0};
    int b{0};
    std::cout << "select a number for a " << std::endl;
    std::cin >> a;
    std::cout << "select a number for b " << std::endl;
    std::cin >> b;
    std::cout << std::endl;
    // std::cout << "using regular if " << std::endl;

    /*
    if(a >  b){
        max = a;
    }else{
        max = b;
    }
    */

    max = (a > b) ? a : b; // Ternary operator

    std::cout << "max : " << max << std::endl;

    return 0;
}