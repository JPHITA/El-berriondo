from flask import Blueprint, request
from flask_restful import Api, Resource
from Login.ModelsUser import User

Login = Blueprint('Login', __name__, url_prefix='/Login')
api = Api(Login)


class handleRegister(Resource):

    def post(self):
        """
        Comprueba los datos introducidos en el form con las instancias de usuarios presentes en la DB

        Parametros:
        Todos los datos introducidos en el register form (nombre, apellido, documento, direccion, email, password)

        :return:
        -codigo 1: el usuario ya existe en la BD (error)
        -codigo 0: el usuario no existe (se puede hacer el registro)
        """

        params = request.get_json()

        documento = params['documento']

        Usu = User.getUsuario(documento)

        if len(Usu) != 0:  # Si la lista no es vacia, significa que el usuario ya existe en la BD / no se puede crear
            # otro user con los mismos datos
            return {"status": "exist"}, 200
        else:  # No hay user con estos datos, se procede a crearlo
            User.setUsuario(**params)
            return {"status": "created"}, 200

api.add_resource(handleRegister, '/handleRegister')


class handleLogin(Resource):
    def post(self):
        """
        Obtiene el email y password introducidos en el login form y verifica con la base de datos que los datos sean correctos

        Parametros:
        -Email
        -Password

        :return:
        -False: Email o password incorrectos
        -True: Los datos concuerdan, se procede al redirect
        """
        params = request.get_json()

        Email = params['email']
        Password = params['password']

        user_exist, user = User.loginChecker(Email, Password)

        return {"user_exist": user_exist, "user": user}


api.add_resource(handleLogin, '/handleLogin')


class newPassword(Resource):
    def post(self):
        params = request.get_json(silent=True) or dict()

        Usu = User.updateUsuarioPassword(params.get("password"),params.get("id"))

        if Usu == "Succesful":
            return True
        else:
            return False


api.add_resource(newPassword, '/newPassword')


class userQuery(Resource):
    def post(self):
        params = request.get_json(silent=True) or dict()

        Usu = User.GetUsuarioId(params.get('documento'))

        if len(Usu)>0:
            if params.get('documento') == Usu[0].get('documento') and params.get('correo') == Usu[0].get('email'):
                return Usu[0]
            else:
                return False
        else:
            return False


api.add_resource(userQuery, '/userQuery')
