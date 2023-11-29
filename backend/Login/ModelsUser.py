from utils.Database import Database
from sqlalchemy import table, column
class User:
    usuario=table("usuarios",
                  column("id"),
                  column("nombre"),
                  column("direccion"),
                  column("email"),
                  column("password"),
                  column("telefono"),
                  column("fecha_registro")
                  )

    def setUsuario(self, Nombre, Documento, Direccion, Email, Password, Telefono):
        db=Database()

        NewUsuario=db.insert(cls.usuarios,return_id=False,
                             id=Documento,
                             nombre=Nombre,
                             direccion=Direccion,
                             email=Email,
                             password=Password,
                             telefono=Telefono,
                             fecha_registro="NOW()"
                             )

        db.commit()
        db.close()


    def getUsuario(self,Nombre):
        db=Database()

        SQL="""
        SELECT *
        FROM usuarios 
        WHERE nombre=Nombre;
            """

        datoU=db.query(SQL,Nombre)

        db.close()

        return datoU

    def handleRegister(self,Nombre, Documento, Direccion, Email, Password, ConfirmPassword, Telefono):

        db=Database()
        SQL1="""
        SELECT *
        FROM usuarios 
        WHERE nombre=Nombre;
            """

        SQL2="""
        SELECT *
        FROM usuarios 
        WHERE documento=Documento;
            """

        SQL3="""
        SELECT *
        FROM usuarios 
        WHERE email=Email;
            """

        if db.query(SQL1, Nombre):
            return 1
        elif db.query(SQL2, Documento):
            return 2
        elif db.query(SQL3, Email):
            return 3
        if Password != ConfirmPassword:
            return 4
        else:
            self.setUsuario(Nombre, Documento, Direccion, Email, Password, Telefono)
            return 0




