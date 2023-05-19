#include <iostream>
#include <string>

int main()
{
    // normal output print on the terminal
    std::cout << "Hello C++20 " << std::endl;

    // printing a variable inline of a string
    int age{18};
    std::cout << "Maria is " << age << " years old. so she is legal now" << std::endl;

    // onother type of output reserved for errors
    std::cerr << "Something got wrong the world will end now" << std::endl;

    // type of output for logs
    std::clog << "log message" << std::endl;

    // declaring variables to use them for input
    int age1;
    int age2;
    int dognumber;
    std::string name;
    std::string race;
    std::string full_name;

    std::cout << "Whats your name bitch?" << std::endl;
    // we use cin to get an input from the terminal this does not admit spaces
    std::cin >> name;
    std::cout << "how old are you?" << std::endl;
    std::cin >> age1;
    std::cout << "Hi " << name << " you motherfucker are " << age1 << " years old" << std::endl;

    std::cout << "how many dogs and of what race are they?" << std::endl;
    // we can chain the inputs in one line.
    std::cin >> dognumber >> race;

    std::cout << "Great " << name << " you have " << dognumber << " " << race << std::endl;

    std::cout << "please type your full name and age" << std::endl;
    // for inputs that contain spaces we need the following:
    std::getline(std::cin >> std::ws, full_name);
    std::cin >> age2;

    std::cout << "Hi " << full_name << " you are " << age2 << " years old" << std::endl;

    return 0;
}