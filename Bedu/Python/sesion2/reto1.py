import os

Toppings = {"oreo": 19, "m&m": 25, "fresas": 22, "brownie": 28}
translator = ["oreo", "m&m", "fresas", "brownie"]

i = 1
os.system("clear")
for topping in Toppings:
    print(f"{i} Helado con {topping}: ${Toppings[topping]}")
    i += 1

opcion = False

while not opcion:
    seleccion = int(input("elige una opción del 1 al 4: "))
    if seleccion > 0 and seleccion < 5:
        opcion = True
    else:
        print("opción no disponible")

print(
    f" disfrute su Helado con {translator[seleccion-1]} que costó ${Toppings[translator[seleccion-1]]}")
