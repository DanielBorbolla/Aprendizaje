#include <iostream>
#include <cstdlib>
#include <ctime>

int main()
{
    // creating the excercise array
    size_t collection_size{0};
    std::cout << "Write the length of your Array: ";
    std::cin >> collection_size;
    int *numbers = new int[collection_size];
    srand(time(0));
    // filling the array with numbers from 0 to 9
    for (int i; i < collection_size; i++)
    {
        numbers[i] = rand() % 10;
    }

    int *unique_numbers_array = new int[collection_size];
    int unique_numbers{1};
    // setting the array to 0
    for (int i; i < collection_size; i++)
    {
        unique_numbers_array[i] = 0;
    }
    unique_numbers_array[0] = numbers[0];
    for (int i; i < collection_size; i++)
    {
        std::cout << numbers[i] << ", ";
    }
    std::cout << std::endl;
    int i{1};
    for (; i < collection_size; i++)
    {

        bool repeated = false;
        for (int j{0}; j < unique_numbers; j++)
        {
            if (numbers[i] == unique_numbers_array[j])
            {
                repeated = true;
                break;
            }
        }
        if (!repeated)
        {
            unique_numbers_array[unique_numbers] = numbers[i];
            unique_numbers++;
        }
    }
    std::cout << "The collection contains " << unique_numbers << " unique numbers, they are : ";
    for (int i{0}; i < unique_numbers; i++)
    {
        std::cout << unique_numbers_array[i] << " ";
    }
    std::cout << std::endl;
}