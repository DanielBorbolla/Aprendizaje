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
    std::cout << "Select tool: \n 1. Pen \n 2. Marker " << std::endl;
    std::cout << " 3. Eraser" << std::endl;
    std::cout << " 4. Rectangle" << std::endl;
    std::cout << " 5. Circle" << std::endl;
    std::cout << " 6. Ellipse" << std::endl;
    int tool;
    std::cin >> tool;

    switch (tool)
    {
    case Pen:
    {
        std::cout << "Active tool is Pen" << std::endl;
    }
    break;

    case Marker:
    {
        std::cout << "Active tool is Marker" << std::endl;
    }
    break;

    case Eraser:
    case Rectangle:
    case Circle:
    {
        std::cout << "Drawing Shapes" << std::endl;
    }
    break;

    case Ellipse:
    {
        std::cout << "Active tool is Ellipse" << std::endl;
    }
    break;

    default:
    {
        std::cout << "No match found" << std::endl;
    }
    break;
    }

    std::cout << "Moving on" << std::endl;

    /*
    // Condition can only be integer of enum (We'll learn about enums later in the course)
    std::string name {"John"};
    switch (name) // Compiler error!
    {

    }
    */

    return 0;
}