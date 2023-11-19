from flask import Blueprint, jsonify, request
from Ventas.model import VentasModel

Ventas = Blueprint('Ventas', __name__, url_prefix='/Ventas')

# TODO
# - cambiar la aplicacion para usar flask_restful
# - hacer que getrandomproducto reciba un array de ids de productos a excluir
#   y que reciba cuantos productos devolver
# - ver que funcione el request.get_json() cuando no se envia nada

@Ventas.get('/getProductos')
def index():
    prods = VentasModel.getProductos()

    return jsonify(prods)

@Ventas.post('/getRandomProducto')
def getRandomProducto():
    print("data recibida", request.data)
    
    excludeProds = request.get_json().get('excludeProds', None)
    
    prods = VentasModel.getRandomProducto(excludeProds)

    return jsonify(prods)

@Ventas.get('/getProducto/<int:idProducto>')
def getProducto(idProducto):
    prod = VentasModel.getProducto(idProducto)

    return jsonify(prod)

@Ventas.get("/getCategorias")
def getCategorias():
    categorias = VentasModel.getCategorias()

    return jsonify(categorias)