from flask import Flask, redirect
from flask_cors import CORS

from Ventas.routes import Ventas

app = Flask(__name__)
CORS(app)

app.register_blueprint(Ventas)


@app.route('/')
def index():
    return redirect('/Ventas')