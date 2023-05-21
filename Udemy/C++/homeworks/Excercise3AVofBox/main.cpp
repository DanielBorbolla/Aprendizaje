#include <iostream>

int main()
{
    float length;
    float width;
    float height;
    float base_area;
    float volume;

    std::cout << "Welcome to box Calculator. Please type in lenght, with and height information" << std::endl;
    std::cout << "length : ";
    std::cin >> length;

    std::cout << "width : ";
    std::cin >> width;

    std::cout << "height : ";
    std::cin >> height;

    base_area = width * length;
    volume = base_area * height;
    std::cout << "the base area is : " << base_area << std::endl;
    std::cout << "the volume is : " << volume << std::endl;

    return 0;
}