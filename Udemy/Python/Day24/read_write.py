# file = open("my_file.txt")
# contents = file.read()
# print(contents)

# file.close()

# with open("my_file.txt") as file:
#     contents = file.read()
#     print(contents)

# # no hay necesidad de cerrar manualmente el archivo este se mantiene abierto solo para ejecutar lo que está dentro de la identación

# with open("my_file.txt", "w") as file:
#     file.write("las chimichangas no son Mexicanas")

# # #!W sobreescribe lo previamente escrito en el archivo. para escribir algo nuevo tenemos que usar A

# with open("my_file.txt", "a") as file:
#     file.write("texto de prueba 2")

# with open("/Users/danielborbolla/Desktop/my_file.txt") as file:
#     contents = file.read()
#     print(contents)

with open("../../my_file.txt") as file:
    contents = file.read()
    print(contents)
