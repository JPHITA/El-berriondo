from utils.Database import Database
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

    def getUsuario(Nombre):
        db = Database()

        SQL = """
        SELECT *
        FROM usuarios u
        WHERE u.nombre=:nombre
            """

        datoU = db.query(SQL, nombre=Nombre)

        db.close()

        return datoU

    def GetUsuarioId(id):
        db=Database()

        SQL = """
        SELECT *
        FROM usuarios u
        WHERE u.id=:id;
            """

        UID=db.query(SQL,id=id)

        return UID

    def loginChecker(Email, Password):
        db = Database()
        SQL = """
        SELECT
            u.id, 
            u.nombre,
            u.apellido,
            u.email,
            u.privilege
        FROM usuarios u
        WHERE u.email=:email
        AND u.password=:password;
        """
        DatoP = db.query(SQL, email=Email, password=Password)

        return len(DatoP) > 0, DatoP[0]

    def updateUsuarioPassword(self,args,Id):
        db=Database()

        SQL="""
        UPDATE usuarios
        
        SET
            password =:password
        
        WHERE id=:id      
        """

        if db.execute(SQL,password=args,id=Id):
            return "Succesful"
        else:
            return "Failed"
