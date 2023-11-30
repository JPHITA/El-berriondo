from flask import Blueprint, request
from flask_restful import Api, Resource

from Admin.model import AdminModel

Admin = Blueprint('Admin', __name__, url_prefix='/Admin')
api = Api(Admin)

class Productos(Resource):
    def get(self, id=None):

        productos = AdminModel.getProductos(id)

        return productos
    
api.add_resource(Productos, '/getProductos/<int:id>', '/getProductos')

class Categorias(Resource):
    def get(self):

        categorias = AdminModel.getCategorias()

        return categorias
    
api.add_resource(Categorias, '/getCategorias')


class saveProducto(Resource):
    def post(self):
        try:
            data = request.get_json()

            producto = data['producto']
            categorias = data['categorias']

            AdminModel.saveProducto(producto, categorias)

            return {'success': True}, 200
    
        except Exception as e:
            return {'success': False, 'error': str(e)}, 400
    
api.add_resource(saveProducto, '/saveProducto')

class modifyProducto(Resource):
    def post(self):
        try: 
            data = request.get_json()

            producto = data['producto']
            categorias = data['categorias']

            AdminModel.modifyProducto(producto, categorias)

            return {'success': True}, 200
        
        except Exception as e:
            return {'success': False, 'error': str(e)}, 400
        
api.add_resource(modifyProducto, '/modifyProducto')

class getVentas(Resource):
    def get(self):
        ventas = AdminModel.getVentas()

        return ventas
    
api.add_resource(getVentas, '/getVentas')


class updateStateVenta(Resource):
    def post(self):
        try:
            data = request.get_json()

            AdminModel.updateStateVenta(data['id'], data['estado'])

            return {'success': True}, 200
        
        except Exception as e:
            return {'success': False, 'error': str(e)}, 400
        
api.add_resource(updateStateVenta, '/updateStateVenta')