archivo = open("notas.txt", "r")

for line in archivo.readlines():
    print(line, end="")

archivo.close()

message = input()
archivo.write()
