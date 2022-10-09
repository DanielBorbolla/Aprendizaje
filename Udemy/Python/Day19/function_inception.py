def add(n1, n2):
    return n1+n2


def substract(n1, n2):
    return n1-n2


def multiply(n1, n2):
    return n1*n2


def divide(n1, n2):
    return n1/n2


def calculator(n1, n2, func):
    return func(n1, n2)


num_1 = int(input("first number: "))

# funct = input("operation \nadd : \nsubstract : \nmultiply : \ndivide : ")

num_2 = int(input("second number: "))

print(calculator(num_1, num_2, multiply))
