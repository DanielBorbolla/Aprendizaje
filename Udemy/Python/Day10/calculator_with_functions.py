from art import logo
import os


def add(n1, n2):
    return n1+n2


def multiply(n1, n2):
    return n1*n2


def divide(n1, n2):
    return n1/n2


def substract(n1, n2):
    return n1-n2


def operation(operator, number_1, number_2):
    operation_dictionary = {
        "*": multiply(number_1, number_2),
        "+": add(number_1, number_2),
        "-": substract(number_1, number_2),
        "/": divide(number_1, number_2),
    }
    return operation_dictionary[operator]


print(logo)
question = "n"
while question != "exit":
    # esta opción funciona pero creo que es muy susceptible a errores la chinita sugiere usar la recursión para arreglar lo mismo
    if question == "y":
        num1 = result
    else:
        num1 = float(input("What's the first number?: "))

    print("""
    +
    -
    *
    /
    """)

    oper = input("pick an operation: ")
    num2 = float(input("What's the next number?: "))
    result = operation(operator=oper, number_1=num1, number_2=num2)

    print(f"{num1} {oper} {num2} = {result} ")

    question = input(
        f"type 'y' to continue calcualating with {result}, type 'n' to start a new calculation or type 'exit' to exit the program ").lower()
    os.system("clear")
