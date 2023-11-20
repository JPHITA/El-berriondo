from flask import Blueprint, request
from Ventas.model import VentasModel
from flask_restful import Api, Resource

Ventas = Blueprint('Ventas', __name__, url_prefix='/Ventas')
api = Api(Ventas)

# TODO
# - ver que funcione el request.get_json() cuando no se envia nada

class Productos(Resource):
    def get(self):
        prods = VentasModel.getProductos()

        return prods

api.add_resource(Productos, '/getProductos')

class RandomProducto(Resource):
    def post(self):
        params = request.get_json(silent=True)

        if params != None:
            excludeProds = params.get('excludeProds', None)
            cant = params.get('cant', 1)
        else:
            excludeProds = None
            cant = 1

        prods = VentasModel.getRandomProducto(excludeProds, cant)

        return prods

api.add_resource(RandomProducto, '/getRandomProducto')

class Producto(Resource):
    def get(self, idProducto):
        prod = VentasModel.getProducto(idProducto)

        return prod

api.add_resource(Producto, '/getProducto/<int:idProducto>')

class Categorias(Resource):
    def get(self):
        categorias = VentasModel.getCategorias()

        return categorias
    
api.add_resource(Categorias, '/getCategorias')