from flask import Flask, render_template

app = Flask(__name__)


def hello_world():
    return render_template('index.html')
