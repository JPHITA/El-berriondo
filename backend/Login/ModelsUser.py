from utils.Database import Database
from sqlalchemy import table, column
class User:
    usuarios=table("usuarios",
                  column("id"),
                  column("nombre"),
                   column('apellido'),
                  column("direccion"),
                  column("email"),
                  column("password"),
                  column("fecha_registro")
                  )

    def setUsuario(cls, Nombre, Apellido, Documento, Direccion, Email, Password):
        db=Database()

        NewUsuario=db.insert(cls.usuarios,return_id=False,
                             id=Documento,
                             nombre=Nombre,
                             apellido=Apellido,
                             direccion=Direccion,
                             email=Email,
                             password=Password,
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





