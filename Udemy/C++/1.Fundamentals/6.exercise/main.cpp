#include <iostream>
#include <string>

int main()
{

    std::string Country;

    std::cout << "Where do you Live?" << std::endl;
    // we use cin to get an input from the terminal this does not admit spaces
    std::cin >> Country;
    std::cout << "I've heard great things about " << Country << ". I'd like to go sometime" << std::endl;

    return 0;
}