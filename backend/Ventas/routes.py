from flask import Blueprint, request
from flask_restful import Api, Resource

from Ventas.model import VentasModel

Ventas = Blueprint('Ventas', __name__, url_prefix='/Ventas')
api = Api(Ventas)

class Productos(Resource):
    def get(self):
        prods = VentasModel.getProductos()
        return prods
    
    def post(self):
        params = request.get_json(silent=True) or dict()

        idProds = params.get('idProds', None)
        prods = VentasModel.getProductos(idProds)

        return prods

api.add_resource(Productos, '/getProductos')

class RandomProducto(Resource):
    def post(self):
        params = request.get_json(silent=True) or dict()

        excludeProds = params.get('excludeProds', None)
        categorias = params.get('categorias', None)
        nombre = params.get('nombre', None)
        cant = params.get('cant', 1)

        prods = VentasModel.getRandomProducto(excludeProds, categorias, nombre, cant)

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