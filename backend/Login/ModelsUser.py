from utils.Database import Database
from sqlalchemy import table, column


class User:
    usuarios = table("usuarios",
                     column("id"),
                     column("documento"),
                     column("nombre"),
                     column('apellido'),
                     column("email"),
                     column("direccion"),
                     column("password"),
                     column("fecha_registro"),
                     column("privilege")
                     )

    @classmethod
    def setUsuario(cls, nombre, apellido, documento, direccion, correo, contraseña):
        db = Database()

        NewUsuario = db.insert(cls.usuarios, return_id=False,
                               documento=documento,
                               nombre=nombre,
                               apellido=apellido,
                               email=correo,
                               direccion=direccion,
                               password=contraseña,
                               fecha_registro="NOW()",
                               privilege=False
                               )

        db.commit()
        db.close()

    @classmethod
    def getUsuario(cls, documento):
        db = Database()

        SQL = """
        SELECT 
            u.id,
            u.documento,
            u.nombre,
            u.apellido,
            u.email,
            u.privilege
        FROM usuarios u
        WHERE u.documento=:documento;
            """

        datoU = db.query(SQL, documento=documento)

        db.close()

        return datoU

    @classmethod
    def GetUsuarioId(cls, documento):
        db=Database()

        SQL = """
        SELECT
            u.id,
            u.documento,
            u.nombre,
            u.apellido,
            u.email,
            u.privilege
        FROM usuarios u
        WHERE u.documento=:documento;
            """

        UID=db.query(SQL,documento=documento)

        return UID

    @classmethod
    def loginChecker(cls, Email, Password):
        db = Database()
        SQL = """
        SELECT
            u.id,
            u.documento,
            u.nombre,
            u.apellido,
            u.email,
            u.privilege
        FROM usuarios u
        WHERE u.email=:email
        AND u.password=:password;
        """
        DatoP = db.query(SQL, email=Email, password=Password)

        return len(DatoP) > 0, DatoP

    @classmethod
    def updateUsuarioPassword(self,args,Id):
        db=Database()

        SQL="""
        UPDATE usuarios
        SET
            password = :password
        WHERE id=:id      
        """
        res = db.execute(SQL,password=args,id=Id)
        db.commit()

        if res.rowcount == 1:
            return "Succesful"
        else:
            return "Failed"
