#include <iostream>
#include <string>

// Tools
const int Pen{1};
const int Marker{2};
const int Eraser{3};
const int Rectangle{4};
const int Circle{5};
const int Ellipse{6};

int main()
{
    std::cout << "Select your tool : " << std::endl;
    std::cout << "1.Pen " << std::endl;
    std::cout << "2.Marker " << std::endl;
    std::cout << "3.Eraser " << std::endl;
    std::cout << "4.Rectangle " << std::endl;
    std::cout << "5.Circle " << std::endl;
    std::cout << "6.Ellipse " << std::endl;

    int tool{9};
    std::cin >> tool;

    switch (double strength{3.56}; tool)
    {
    case Pen:
    {
        std::cout << "Active tool is Pen. strength : " << strength << std::endl;
    }
    break;

    case Marker:
    {
        std::cout << "Active tool is Marker. strength : " << strength << std::endl;
    }
    break;

    case Eraser:
    case Rectangle:
    case Circle:
    {
        std::cout << "Drawing Shapes. strength : " << strength << std::endl;
    }
    break;

    case Ellipse:
    {
        std::cout << "Active tool is Ellipse. strength : " << strength << std::endl;
    }
    break;

    default:
    {
        std::cout << "are you stupid? get out of here! " << strength << std::endl;
    }
    break;
    }

    std::cout << "Moving on" << std::endl;
    // strength++;

    return 0;
}