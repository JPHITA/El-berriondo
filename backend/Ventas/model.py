from utils.Database import Database

class VentasModel: 

    @classmethod
    def getProductos(cls, idProds=None):
        db = Database()

        SQL = """
        SELECT
            p.id,
            p.nombre,
            p.descripcion_larga,
            p.descripcion_corta,
            CAST (p.precio AS DOUBLE PRECISION) AS precio,
            p.stock,
            p.urlimg,
            array_agg(cp.id_categoria) AS categorias
        FROM productos p
        JOIN categorias_productos cp ON p.id = cp.id_producto
        WHERE p.activo = TRUE
        """
        if idProds: SQL += " AND p.id IN (SELECT UNNEST(:idProds)) "

        SQL += """
        GROUP BY 1,2,3,4,5,6,7
        LIMIT 50
        """

        data = db.query(SQL, idProds=idProds)

        db.close()

        return data
    
    @classmethod
    def getRandomProducto(cls, excludeProds = None, categorias = None, nombre = None, cant = 1):
        db = Database()

        if nombre != None: nombre = f'%{nombre}%'

        SQL = """
        SELECT
            p.id,
            p.nombre,
            p.descripcion_larga,
            p.descripcion_corta,
            CAST (p.precio AS DOUBLE PRECISION) AS precio,
            p.stock,
            p.urlimg
        FROM productos p
        """

        if categorias: SQL += " JOIN categorias_productos cp ON p.id = cp.id_producto"

        SQL += " WHERE p.activo = TRUE"

        if excludeProds: SQL += " AND p.id NOT IN (SELECT UNNEST(:excludeProds))"

        if categorias != None and nombre != None:
            SQL += " AND (cp.id_categoria IN (SELECT UNNEST(:categorias)) OR p.nombre ILIKE :nombre)"

        elif categorias != None:
            SQL += " AND cp.id_categoria IN (SELECT UNNEST(:categorias))"

        elif nombre != None:
            SQL += " AND p.nombre ILIKE :nombre"

    
        SQL += """
        ORDER BY RANDOM()
        LIMIT :cant
        """
        
        data = db.query(SQL, excludeProds=excludeProds, categorias=categorias, nombre=nombre, cant=cant)

        db.close()

        return data

    @classmethod
    def getProducto(cls, idProducto):
        db = Database()

        SQL = """
        SELECT
            p.id,
            p.nombre,
            p.descripcion_larga,
            p.descripcion_corta,
            CAST (p.precio AS DOUBLE PRECISION) AS precio,
            p.stock,
            p.urlimg,
            array_agg(cp.id_categoria) AS categorias
        FROM productos p
        JOIN categorias_productos cp ON p.id = cp.id_producto 
        WHERE p.activo = TRUE
        AND p.id = :id
        GROUP BY 1,2,3,4,5,6,7
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
    
