class Mascota():
    def __init__(self, especie="perro", nombre="Riley", raza="mestiza", edad=5, vacunas=True):
        self.especie = especie

        self.nombre = nombre
        self.raza = raza
        self.edad = edad
        self.vacunas = vacunas

    def saluda(self):
        if self.especie == "perro":
            print("guau")
        elif self.especie == "gato":
            print("miau")
        elif self.especie == "vaca":
            print("mooo")
        elif self.especie == "pollo":
            print("pio")
        elif self.especie == "rata":
            print("ii iii i")
        elif self.especie == "vivora":
            print("guashamaha hasa")
        else:
            print("ruidos raros")

    def __str__(self):
        return f"Nombre : {self.nombre} \n Especie: {self.especie} \n Raza: {self.raza} \n Edad : {self.edad} \n Vacunas :{self.vacunas} "


print("Bienvenido a veterinaria chanito por favor ingrese la informacion de su mascota")
nombre = input("¿Cual es el nombre de su mascota? ")
especie = input("¿Cual es la especie de su mascota? ").lower()
raza = input("¿Cual es la raza de su mascota? ").lower()
edad = int(input("¿que edad tiene? "))
vacunas = input("¿tiene sus vacunas? ")

nueva_mascota = Mascota(especie=especie, nombre=nombre,
                        raza=raza, edad=edad, vacunas=vacunas)
print(nueva_mascota)
nueva_mascota.saluda()
