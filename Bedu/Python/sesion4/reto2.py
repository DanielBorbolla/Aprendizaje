
import csv
import datetime

with open("autos.csv", "w") as my_csv:
    writer = csv.writer(my_csv)
    add = True
    writer.writerow(["auto", "color", "lujo", "precio", "fecha de inclusión"])
    while add:
        auto = input("inserte el nombre del auto: ")
        color = input("inserte color: ")
        lujo = input("inserte el nivel de equipo: ")
        precio = input("inserte el precio ")
        otro = input("Agregar otro Auto (s/n?").lower()
        writer.writerow([auto, color, lujo, precio, datetime.datetime.now()])
        if otro == "n":
            add = False
