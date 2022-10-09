# def multiplicacion(*number):
#     x = 1
#     for num in number:
#         x *= num
#     return x


# print(multiplicacion(1, 2, 3, 4, 5))


def directorio(**registro):
    print(registro)
    registro_ordenado = sorted(registro.items())
    diccionario = {}
    for dato in registro_ordenado:
        diccionario[dato[0]] = dato[1]
    return diccionario


print(directorio(Jacob=123456, Arturo=456789, Mau=987))
