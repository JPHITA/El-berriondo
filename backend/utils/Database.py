from sqlalchemy import create_engine, text, insert
import os


class Database:
    """
    Clase que representa una conexión a la base de datos PostgreSQL.

    Attributes:
        engine (sqlalchemy.engine.Engine): Motor de la base de datos PostgreSQL.
        db (sqlalchemy.engine.Connection): Conexión a la base de datos.

    Methods:
        query(query: str, **params) -> list[dict]: Ejecuta una consulta SQL y devuelve los resultados como una lista de diccionarios.
        insert(table: sqlalchemy.Table, return_id: bool = False, **values) -> int or None: Inserta una fila en la tabla especificada y devuelve el ID de la fila insertada si return_id es True.
        execute(query: str, **params) -> sqlalchemy.engine.ResultProxy: Ejecuta una consulta SQL y devuelve el objeto ResultProxy.
        commit() -> None: Confirma las transacciones pendientes en la base de datos.
        rollback() -> None: Revierte las transacciones pendientes en la base de datos.
        close() -> None: Cierra la conexión a la base de datos.
    """

    def __init__(self):
        is_docker = os.environ.get('ISDOCKER', False)

        USER = "admin"
        PASSW = "adminps"
        HOST = "database" if is_docker else "localhost" # si, para docker ...
        PORT = "5432"
        DB = "ElBerriondo"
        
        self.engine = create_engine(f"postgresql+psycopg2://{USER}:{PASSW}@{HOST}:{PORT}/{DB}")
        self.db = self.engine.connect()

    def query(self, query, **params):
        """
        Ejecuta una consulta SQL y devuelve los resultados como una lista de diccionarios.

        Args:
            query (str): Consulta SQL a ejecutar.
            **params: Parámetros adicionales para la consulta SQL.

        Returns:
            list[dict]: Lista de diccionarios que representan los resultados de la consulta.
        """
        cursor = self.db.execute(text(query), params).cursor

        cols = [column[0] for column in cursor.description]
        data = cursor.fetchall()

        return list(map(lambda x: dict(zip(cols, x)), data))
    
    def insert(self, table, return_id=False, **values):
        """
        Inserta una fila en la tabla especificada y devuelve el ID de la fila insertada si return_id es True.

        Args:
            table (sqlalchemy.Table): Tabla en la que se insertará la fila.
            return_id (bool, optional): Indica si se debe devolver el ID de la fila insertada. Por defecto es False.
            **values: Valores de las columnas de la fila a insertar.

        Returns:
            int or None: ID de la fila insertada si return_id es True, None en caso contrario.
        """
        stmt = insert(table).values(**values).returning(table.c.id)

        res = self.db.execute(stmt)

        if return_id: 
            self.commit()
            return res.fetchone()[0]
    
    def execute(self, query, **params):
        """
        Ejecuta una consulta SQL y devuelve el objeto ResultProxy.

        Args:
            query (str): Consulta SQL a ejecutar.
            **params: Parámetros adicionales para la consulta SQL.

        Returns:
            sqlalchemy.engine.ResultProxy: Objeto ResultProxy que representa los resultados de la consulta.
        """
        return self.db.execute(text(query), params)
    
    def commit(self):
        """
        Confirma las transacciones pendientes en la base de datos.
        """
        self.db.commit()

    def rollback(self):
        """
        Revierte las transacciones pendientes en la base de datos.
        """
        self.db.rollback()

    def close(self):
        """
        Cierra la conexión a la base de datos.
        """
        self.db.close()