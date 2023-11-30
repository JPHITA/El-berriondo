from flask import Flask, redirect
from flask_cors import CORS

from Ventas.routes import Ventas
from Admin.routes import Admin
from Login.RoutesUser import Login

app = Flask(__name__)
CORS(app)

app.register_blueprint(Ventas)
app.register_blueprint(Admin)
app.register_blueprint(Login)
# registrar demas modulos