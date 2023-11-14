from flask import Blueprint, jsonify
from Ventas.model import VentasModel

Ventas = Blueprint('Ventas', __name__, url_prefix='/Ventas')

@Ventas.get('/getProductos')
def index():
    prods = VentasModel.getProductos()

    return jsonify(prods)