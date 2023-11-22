from flask import Blueprint, request
from flask_restful import Api, Resource

from Ventas.model import VentasModel

Ventas = Blueprint('Ventas', __name__, url_prefix='/Ventas')
api = Api(Ventas)


class SaveVenta(Resource):
    def post(self):
        """
        Guarda una venta en la base de datos.

        Parámetros esperados:
        - idUsuario: int, el ID del usuario que realiza la venta.
        - productos: list, una lista de productos vendidos.

        Retorna:
        - "OK", 200 si la venta se guarda exitosamente.
        - str, 400 si ocurre algún error.
        """
        try:
            params = request.get_json()

            idUsuario = params['idUsuario']
            productos = params['productos']

            VentasModel.saveVenta(idUsuario, productos)

            return "OK", 200
        
        except Exception as e:
            return str(e), 400
        
api.add_resource(SaveVenta, '/SaveVenta')

class Productos(Resource):
    def get(self):
        """
        Obtiene todos los productos.

        Retorna:
        - list, una lista de todos los productos.
        """
        prods = VentasModel.getProductos()
        return prods
    
    def post(self):
        """
        Obtiene los productos según los IDs especificados.

        Parámetros esperados:
        - idProds: list, una lista de IDs de productos.

        Retorna:
        - list, una lista de productos correspondientes a los IDs especificados.
        """
        params = request.get_json(silent=True) or dict()

        idProds = params.get('idProds', None)
        prods = VentasModel.getProductos(idProds)

        return prods

api.add_resource(Productos, '/getProductos')

class RandomProducto(Resource):
    def post(self):
        """
        Obtiene productos aleatorios según los filtros especificados.

        Parámetros esperados:
        - excludeProds: list, una lista de IDs de productos a excluir.
        - categorias: list, una lista de categorías de productos.
        - nombre: str, el nombre de los productos.
        - cant: int, la cantidad de productos aleatorios a obtener.

        Retorna:
        - list, una lista de productos aleatorios según los filtros especificados.
        """
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
        """
        Obtiene un producto según su ID.

        Parámetros:
        - idProducto: int, el ID del producto.

        Retorna:
        - dict, la información del producto.
        """
        prod = VentasModel.getProducto(idProducto)

        return prod

api.add_resource(Producto, '/getProducto/<int:idProducto>')

class Categorias(Resource):
    def get(self):
        """
        Obtiene todas las categorías de productos.

        Retorna:
        - list, una lista de todas las categorías de productos.
        """
        categorias = VentasModel.getCategorias()

        return categorias
    
api.add_resource(Categorias, '/getCategorias')