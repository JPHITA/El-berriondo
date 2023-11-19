from utils.Database import Database

class VentasModel: 

    @classmethod
    def getProductos(cls):
        db = Database()

        SQL = """
        SELECT
            id,
            nombre,
            descripcion_larga,
            descripcion_corta,
            precio,
            stock,
            urlimg
        FROM productos
        WHERE activo = TRUE
        LIMIT 50
        """

        data = db.query(SQL)

        db.close()

        return data
    
    @classmethod
    def getRandomProducto(cls, excludeProds = None):
        db = Database()

        SQL = """
        SELECT
            id,
            nombre,
            descripcion_larga,
            descripcion_corta,
            precio,
            stock,
            urlimg
        FROM productos
        WHERE activo = TRUE
        """

        if excludeProds:
            SQL += " AND id NOT IN :excludeProds"
        
        SQL += """
        ORDER BY RANDOM()
        LIMIT 1
        """


        data = db.query(SQL, excludeProds=excludeProds)

        db.close()

        return data[0]

    @classmethod
    def getProducto(cls, idProducto):
        db = Database()

        SQL = """
        SELECT
            id,
            nombre,
            descripcion_larga,
            descripcion_corta,
            precio,
            stock,
            urlimg
        FROM productos
        WHERE activo = TRUE
        AND id = :id
        """

        data = db.query(SQL, id=idProducto)

        db.close()

        return data[0]

    @classmethod
    def getCategorias(cls):
        db = Database()

        SQL = """
        SELECT
            id,
            nombre
        FROM categorias
        """

        data = db.query(SQL)

        db.close()

        return data
    
