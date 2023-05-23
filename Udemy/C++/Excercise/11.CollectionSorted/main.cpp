#include <iostream>
// write program to check if the array numbers is sorted and return a boolean
// called sorted with true or false
int main()
{
    // int numbers[]{1, 2, 4, 5, 8, 12, 13, 16, 71, 92};
    int numbers[]{1, 112, 4, 5, 8, 12, 13, 16, 71, 92};
    int collection_size = std::size(numbers);
    bool sorted{true};
    for (int i; i < (collection_size - 1); i++)
    {

        if (numbers[i] > numbers[i + 1])
        {
            sorted = false;
            break;
        }
    }
    std::cout << sorted << std::endl;
}