from flask import Blueprint, request
from flask_restful import Api, Resource
from ModelsUser import User

Login = Blueprint('Login', __name__, url_prefix='/Login')
api = Api(Login)


class handleRegister(Resource):

    def get(self):
        """
        Comprueba los datos introducidos en el form con las instancias de usuarios presentes en la DB

        Parametros:
        Todos los datos introducidos en el register form (nombre, apellido, documento, direccion, email, password)

        :return:
        -codigo 1: el usuario ya existe en la BD (error)
        -codigo 0: el usuario no existe (se puede hacer el registro)
        """

        params = request.get_json(silent=True) or dict()

        Nombre = params['nombre']

        Usu = User.getUsuario(Nombre)

        if Usu.len != 0: #Si la lista no es vacia, significa que el usuario ya existe en la BD / no se puede crear otro user con los mismos datos
            return False
        else: #No hay user con estos datos, se procede a crearlo
            User.setUsuario(params.get('nombre'), params.get('apellido'), params.get('id'), params.get('direccion'),
                            params.get('email'), params.get('password'))
            return True


api.add_resource(handleRegister, '/handleRegister')


class handleLogin(Resource):
    def get(self):
        """
        Obtiene el email y password introducidos en el login form y verifica con la base de datos que los datos sean correctos

        Parametros:
        -Email
        -Password

        :return:
        -False: Email o password incorrectos
        -True: Los datos concuerdan, se procede al redirect
        """
        params = request.get_json(silent=True) or dict()

        Email = params['email']
        Password = params['password']

        Usu = User.loginChecker(Email, Password)

        if Usu: # si el usuario existe, se retorna para ser añadido a session storage
            return Usu
        else:
            return False


api.add_resource(handleLogin, '/handleLogin')


class newPassword(Resource):
    def get(self):
        params = request.get_json(silent=True) or dict()

        Usu = User.updateUsuarioPassword(params)

        if Usu:
            return True
        else:
            return False


api.add_resource(newPassword, '/newPassword')


class userQuery(Resource):
    def get(self):
        params = request.get_json(silent=True) or dict()

        Usu = User.GetUsuarioId(params.get('id'))

        if params.get('id') == Usu.get('id') and params.get('correo') == Usu.get('correo'):
            return Usu
        else:
            return False


api.add_resource((userQuery, '/userQuery'))
