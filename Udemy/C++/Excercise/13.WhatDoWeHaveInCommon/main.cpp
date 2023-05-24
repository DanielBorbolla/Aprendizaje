#include <iostream>

int main()
{
    // program that compares two arrays and returns the common elements
    int array_1[]{1, 2, 4, 5, 9, 3, 6, 7, 44, 55};
    int array_2[]{11, 2, 44, 45, 49, 43, 46, 47, 55, 88};

    // starts here
    int array_length{10};
    int numbers_in_common[10]{0};
    int how_many{0};
    for (size_t i{0}; i < array_length; i++)
    {
        for (size_t j{0}; j < array_length; j++)
        {
            if (array_1[i] == array_2[j])
            {
                numbers_in_common[how_many] = array_1[i];
                how_many++;
                break;
            }
        }
    }
    std::cout << "There are " << how_many << " common elements";
    if (how_many)
    {
        std::cout << " they are : ";
        for (size_t i{0}; i < how_many; i++)
        {
            std::cout << numbers_in_common[i] << " ";
        }
    }
    std::cout << std::endl;

    return 0;
}