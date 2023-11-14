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