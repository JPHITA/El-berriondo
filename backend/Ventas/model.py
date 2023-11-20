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
            CAST (precio AS DOUBLE PRECISION) AS precio,
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
    def getRandomProducto(cls, excludeProds = None, cant = 1):
        db = Database()

        SQL = """
        SELECT
            id,
            nombre,
            descripcion_larga,
            descripcion_corta,
            CAST (precio AS DOUBLE PRECISION) AS precio,
            stock,
            urlimg
        FROM productos
        WHERE activo = TRUE
        """

        if excludeProds:
            SQL += " AND id NOT IN (SELECT UNNEST(:excludeProds))"
        
        SQL += """
        ORDER BY RANDOM()
        LIMIT :cant
        """


        data = db.query(SQL, excludeProds=excludeProds, cant=cant)

        db.close()

        return data

    @classmethod
    def getProducto(cls, idProducto):
        db = Database()

        SQL = """
        SELECT
            id,
            nombre,
            descripcion_larga,
            descripcion_corta,
            CAST (precio AS DOUBLE PRECISION) AS precio,
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
    
