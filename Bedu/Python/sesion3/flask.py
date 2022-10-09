from flask import Flask  # ! hubo un error al correr este código queda pendiente
import random
app = Flask()
numero = random.randint(0, 100)


@app.route("/hola-flask")
def hola_flask():
    return (f"hola Flask tu numero es {numero}")
