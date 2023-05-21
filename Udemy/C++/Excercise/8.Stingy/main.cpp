#include <iostream>
#include <vector>

std::vector<double> bubbleSort(std::vector<double> arr)
{
    int n = arr.size();
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
    return arr;
}
int main()
{
    // we have to get the least amount posible to pay with the combinations of the following vectors using while loops
    std::vector<double> unit_prices{10.4, 21.5, 14.0, 15.2, 7.9};
    int min_val{0};
    std::vector<double> arrenged_prices{0, 0, 0, 0, 0};
    std::vector<double> number_of_items{60, 20, 10, 30, 20, 50};
    std::vector<double> arrenged_items{0, 0, 0, 0, 0, 0};

    arrenged_prices = bubbleSort(unit_prices);
    arrenged_items = bubbleSort(number_of_items);
    int n = unit_prices.size();
    int i{0};
    double total{0};
    while (i < n)
    {
        double subtotal = arrenged_prices[i] * arrenged_items[n - 1 - i];
        total = total + subtotal;
        std::cout << i << " " << arrenged_prices[i] << " " << arrenged_items[n - 1 - i] << " " << subtotal << std::endl;
        i++;
    }
    std::cout << "total " << total << std::endl;
    return 0;
    // i missunderstood the assignement and looked for the minumum sum combination of numbers while they were asking for
    //  for the minimum product of two numbers on the same indes unit_prices[i]*numer_of_items[i];
}