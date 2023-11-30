from flask import Flask, redirect
from flask_cors import CORS

from Ventas.routes import Ventas
from Admin.routes import Admin

app = Flask(__name__)
CORS(app)

app.register_blueprint(Ventas)
app.register_blueprint(Admin)
# registrar demas modulos