from backend.utils.Database import Database
from sqlalchemy import table, column


class User:
    usuarios = table("usuarios",
                     column("id"),
                     column("nombre"),
                     column('apellido'),
                     column("email"),
                     column("direccion"),
                     column("password"),
                     column("fecha_registro"),
                     column("privilege")
                     )

    @classmethod
    def setUsuario(cls, Nombre, Apellido, Documento, Direccion, Email, Password):
        db = Database()

        NewUsuario = db.insert(cls.usuarios, return_id=False,
                               id=Documento,
                               nombre=Nombre,
                               apellido=Apellido,
                               email=Email,
                               direccion=Direccion,
                               password=Password,
                               fecha_registro="NOW()",
                               privilege=False
                               )

        db.commit()
        db.close()

    def getUsuario(self, Nombre):
        db = Database()

        SQL = """
        SELECT *
        FROM usuarios 
        WHERE nombre=Nombre;
            """

        datoU = db.query(SQL, Nombre)

        db.close()

        return datoU

    def GetUsuarioId(self, id):
        db=Database()

        SQL = """
        SELECT *
        FROM usuarios 
        WHERE id='Id';
            """

        UID=db.query(SQL,id)

        return UID

    def loginChecker(self, Email, Password):
        db = Database()
        SQL = """
        SELECT *
        FROM usuarios
        WHERE email=Email
        AND password=Password;
        """
        DatoP = db.query(SQL, Email, Password)

        if DatoP.len != 0:
            return True
        else:
            return False

    def updateUsuarioPassword(self,args):
        db=Database()

        SQL="""
        UPDATE usuarios
        
        SET
            password = 'arg'
        
        WHERE id='id'       
        """

        Update=db.execute(SQL,args)

        if Update:
            return True
        else:
            return False
