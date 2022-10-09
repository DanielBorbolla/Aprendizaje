# al encontrarse con un return python deja de leer en la misma línea. podemos usar múltiples returns pero tienen que estar asociados a una condicional

def format_name(f_name, l_name):
    if f_name == "" or l_name == "":
        return "empty string detected"
    first = f_name.title()
    last = l_name.title()
    return (first + " " + last)


first = input("nombre")
last = input("apellido")
print(format_name(f_name=first, l_name=last))
