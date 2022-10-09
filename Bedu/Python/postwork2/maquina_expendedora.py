class Inventario:

    """Models each Menu Item."""

    def __init__(self, nombre, tamano, costo):
        self.nombre = nombre
        self.tamano = tamano
        self.costo = costo


class Menu:

    def __init__(self):
        self.menu = [
            Inventario(nombre="Coca_lata", tamano=350, costo=12),
            Inventario(nombre="Coca_light_lata", tamano=350, costo=10),
            Inventario(nombre="Coca_600", tamano=600, costo=16),
            Inventario(nombre="Coca_light_600", tamano=600, costo=14),
            Inventario(nombre="Fanta_lata", tamano=350, costo=12),
            Inventario(nombre="Fanta_600", tamano=600, costo=18),
            Inventario(nombre="Sprite_lata", tamano=350, costo=14),
            Inventario(nombre="Sprite_600", tamano=600, costo=20),
           
        ]

    def get_items(self):
        """Returns all the names of the available menu items"""
        options = ""
        for item in self.menu:
            options += f"{item.name}/"
        return options

    def find_drink(self, order_name):
        """Searches the menu for a particular drink by name. Returns that item if it exists, otherwise returns None"""
        for item in self.menu:
            if item.name == order_name:
                return item
        print("Sorry that item is not available.")
