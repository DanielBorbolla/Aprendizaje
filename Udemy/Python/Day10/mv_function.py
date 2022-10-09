
# ** probar una función con varios valores de salida.

# def my_function(a, b):
#     return a*b


# x = float(input("first number: "))
# y = float(input("second number: "))
# print(my_function(x, y))

# * versión con print en la función

# def format_name(f_name, l_name):
#     first = f_name.title()
#     last = l_name.title()
#     print(first + " " + last)


# first = input("nombre")
# last = input("apellido")
# format_name(f_name=first, l_name=last)

# * versión usando el return de la función

def format_name(f_name, l_name):
    first = f_name.title()
    last = l_name.title()
    return (first + " " + last)


first = input("nombre")
last = input("apellido")
print(format_name(f_name=first, l_name=last))
