from utils.Database import Database
from sqlalchemy import table, column

class VentasModel:
    ventas = table("ventas",
        column("id"),
        column("id_usuario"),
        column("estado"),
        column("fecha_registro")
    )

    ventas_productos = table("ventas_productos",
        column("id"),
        column("id_venta"),
        column("id_producto"),
        column("cantidad"),
        column("precio")
    )

    @classmethod
    def saveVenta(cls, idUsuario, productos):
        """
        Guarda una venta en la base de datos, guarda los productos de esa venta y actualiza el stock de los productos.

        Args:
            idUsuario (int): El ID del usuario que realiza la venta.
            productos ([producto]): Lista de productos vendidos.

        Returns:
            None
        """
        db = Database()

        id_venta = db.insert(cls.ventas, return_id=True,
            id_usuario=idUsuario,
            estado="En proceso",
            fecha_registro="NOW()"
        )

        for prod in productos:
            db.insert(cls.ventas_productos,
                id_venta=id_venta,
                id_producto=prod['idProducto'],
                cantidad=prod['cantidad'],
                precio=prod['precio']
            )
            
            db.execute("UPDATE productos SET stock = stock - :cantidad WHERE id = :idProducto", cantidad=prod['cantidad'], idProducto=prod['idProducto'])

        db.commit()

        db.close()

    @classmethod
    def getProductos(cls, idProds=None):
        """
        Obtiene los productos de la base de datos.

        Args:
            idProds (list, optional): Lista de IDs de productos a obtener. Defaults to None.

        Returns:
            list: Lista de productos obtenidos.
        """
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
    def getRandomProducto(cls, excludeProds=None, categorias=None, nombre=None, cant=1):
        """
        Obtiene productos aleatorios de la base de datos.

        Args:
            excludeProds (list, optional): Lista de IDs de productos a excluir. Defaults to None.
            categorias (list, optional): Lista de IDs de categorías de productos a obtener. Defaults to None.
            nombre (str, optional): Nombre de producto similar a buscar. Defaults to None.
            cant (int, optional): Cantidad de productos a obtener. Defaults to 1.

        Returns:
            list: Lista de productos obtenidos.
        """
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

        if categorias and nombre != None:
            SQL += " AND (cp.id_categoria IN (SELECT UNNEST(:categorias)) OR p.nombre ILIKE :nombre)"

        elif categorias:
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
        """
        Obtiene un producto de la base de datos.

        Args:
            idProducto (int): El ID del producto a obtener.

        Returns:
            dict: El producto obtenido.
        """
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
        """
        Obtiene las categorías de productos de la base de datos.

        Returns:
            list: Lista de categorías obtenidas.
        """
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
       
