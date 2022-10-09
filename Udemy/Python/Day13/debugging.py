############DEBUGGING#####################

# # # Describe Problem
# def my_function():
#     for i in range(1, 21):
#         if i == 20:
#             print("You got it")


# my_function()
# el problema era que el ciclo for terminaba en 20 y cuando usamos la función range se para 1 antes del máximo establecido

# # Reproduce the Bug
# from random import randint
# dice_imgs = ["❶", "❷", "❸", "❹", "❺", "❻"]
# dice_num = randint(0, 5)
# print(dice_imgs[dice_num])
# el problema era que en el randint nuesto rango era de 1 a 6 cuando el índice de una lista empieza en 0 y termina con n-1

# # Play Computer
# year = int(input("What's your year of birth?"))
# if year > 1980 and year <= 1994:
#     print("You are a millenial.")
# elif year > 1994:
#     print("You are a Gen Z.")
# el problema era que el año 1994 nunca era seleccionado por lo que se arreglo con un <=

# # Fix the Errors
# age = int(input("How old are you?"))
# if age >= 18:
#     print(f"You can drive at age {age}.")
# aquí había varios errores. age era un string por lo que no se puede comparar print no estaba indentado y el string a imprimir tenía que ser un fstring para aceptar la variable age
# #Print is Your Friend
# pages = 0
# word_per_page = 0
# pages = int(input("Number of pages: "))
# word_per_page = int(input("Number of words per page: "))
# total_words = pages * word_per_page
# print(total_words)
# el problema era que word_per_page estaba con == lo cual hace una comparación y no la asignación de valor en la variable
# #Use a Debugger
# def mutate(a_list):
#     b_list = []
#     for item in a_list:
#         new_item = item * 2
#         b_list.append(new_item)
#     print(b_list)


# mutate([1, 2, 3, 5, 8, 13])
# el problema estaba en que la línea 46 estaba fuera de la indentación del ciclo for por lo que solo se ejecutaba una vez ya que el ciclo estaba finalizado
