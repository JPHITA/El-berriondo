from flask import Blueprint, request
from flask_restful import Api, Resource
from Login.ModelsUser import User

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

        params=request.get_json(silent=True) or dict()

        Nombre=params['Nombre']

        Usu=User.getUsuario(Nombre)

        if Usu.len!=0:
            return 1
        else:
            User.setUsuario(params.get('Nombre'),params.get('Apellido'), params.get('Documento'), params.get('Direccion'), params.get('Email'), params.get('Password'))
            return 0

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
        params=request.get_json(silent=True) or dict()

        Email=params['Email']
        Password=params['Password']

        Usu=User.loginChecker(Email,Password)

        if Usu:
            return True
        else:
            return False

api.add_resource(handleLogin, '/handleLogin')