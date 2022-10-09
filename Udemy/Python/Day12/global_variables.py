# ya habíamos usado variables globales en el día 11 pero hasta ahora toca en la clase de la chinita

enemies = 1  # aquí se define una variable global


def increase_enemies():
    enemies = 2  # esta no es la misma variable. aquí se crea una nueva variable con enfoque local
    print(f"local enemies {enemies}")


def enemies_global():
    global enemies
    enemies = 3


increase_enemies()
enemies_global()
print(f"global enemies {enemies}")
