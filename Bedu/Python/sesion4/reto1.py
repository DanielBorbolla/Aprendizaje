concesionaria = open("autos.txt", "a")

add = True
while add:
    auto = input("inserte el nombre del auto: ")
    color = input("inserte color: ")
    lujo = input("inserte el nivel de equipo: ")
    precio = input("inserte el precio ")
    otro = input("Agregar otro Auto (s/n?").lower()
    t = "\t"
    nuevo_carro = (auto + t + t + color + t + lujo + t + precio + "\n")
    concesionaria.write(nuevo_carro)
    if otro == "n":
        add = False

concesionaria.close()
