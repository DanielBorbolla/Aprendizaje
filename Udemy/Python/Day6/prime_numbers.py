# Write your code below this line 👇
def prime_checker(number):
    x = 3
    y = 2
    while x != 0:
        x = number % (y)
        if x == 0:
            if y == number:
                print("It's a prime number.")
            else:
                print("It's not a prime number.")
        else:
            y += 1

# Write your code above this line 👆


# Do NOT change any of the code below👇
n = int(input("Check this number: "))
prime_checker(number=n)
