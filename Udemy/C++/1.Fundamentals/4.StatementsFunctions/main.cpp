#include <iostream>
/* we have to specify the type of variable that we are returning and the type of the inputs of the function
 */
int addNumbers(int firstnum, int secondnum)
{ // function
    int result = firstnum + secondnum;
    return result;
}
int main()
{
    int first_number{3}; // statement
    int second_number{4};

    std::cout << "first number : " << first_number << std::endl;
    std::cout << "second number : " << second_number << std::endl;

    int sum = first_number + second_number;
    std::cout << "result : " << sum << std::endl;

    int add = addNumbers(9, second_number);

    std::cout << "Addition : " << add << std::endl;

    std::cout << "last example :" << addNumbers(45, 87) << std::endl;

    return 0;
}