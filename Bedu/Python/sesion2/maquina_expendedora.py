
# ---------------------------- CLASSES ------------------------------- #

class Refresco():
    def __init__(self, nombre, sabor, precio):
        self.nombre = nombre
        self.sabor = sabor
        self.__precio = precio

    def ajuste_de_precio(self, nuevo_precio):
        candado = input("contraseña ")
        if candado == "sabado":
            self.__precio = nuevo_precio
        else:
            print("contraseña incorrecta")


class MaquinaExpendedora():
    def __init__(self, inventario, dinero=0):
        self.__inventario = inventario
        self.__dinero = dinero

    def compra(self, seleccion, pago):
