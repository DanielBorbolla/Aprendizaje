from flask import Flask

# Iniciar la aplicación

app = Flask(__name__)
# Definien


@app.route('/')
def hello_world():
    return "hello world"


@app.route('/greeting')
def greeting():
    return "hola como estás?"

# la siguiente línea se usa cuando se corre el archivo directamente desde python
# app.run()
