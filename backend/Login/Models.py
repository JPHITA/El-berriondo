from utils.Database import Database
from sqlalchemy import table, column
class User:
    usuario=table("usuario",
                  column("id"),
                  column("id_usuario"),
                  column("correo"),
                  column("contrasena"),
                  column("direccion"),
                  column("telefono")
                  )


    dbuser=Database()
    def setUsuario(self):


    def getUsuario(self):
