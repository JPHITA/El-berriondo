from utils.Database import Database
from sqlalchemy import table, column

class AdminModel:
    productos = table("productos",
        column("id"),
        column("nombre"),
        column("precio"),
        column("urlimg"),
        column("stock"),
        column("descripcion_corta"),
        column("descripcion_larga"),
        column("fecha_registro"),
        column("activo")
    )
    
    categorias_productos = table("categorias_productos",
        column("id"),
        column("id_producto"),
        column("id_categoria")
    )

    @classmethod
    def getProductos(cls, id=None):

        db = Database()

        SQL = """
            SELECT
                p.id,
                TO_CHAR(p.fecha_registro, 'DD/MM/YYYY') AS fecha_registro,
                p.nombre,
                p.descripcion_corta,
                p.descripcion_larga ,
                CAST (p.precio AS DOUBLE PRECISION) AS precio,
                p.stock,
                p.activo,
                string_agg(c.nombre, ', ') AS categoriasName,
                array_agg(c.id) AS categorias
            FROM productos p
            JOIN categorias_productos cp ON p.id = cp.id_producto 
            JOIN categorias c ON c.id = cp.id_categoria             
        """

        if id: SQL += " WHERE p.id = :id"

        SQL += " GROUP BY 1,2,3,4,5,6"

        productos = db.query(SQL, id=id)

        db.close()

        return productos
    
    @classmethod
    def getCategorias(cls):

        db = Database()

        categorias = db.query("""
        SELECT
            id,
            nombre,
            TO_CHAR(fecha_registro, 'DD-MM-YYYY') AS fecha_registro
        FROM categorias
        """)

        

        db.close()

        return categorias
    
    @classmethod
    def saveProducto(cls, producto, categorias):
        db = Database()

        id_prod = db.insert(cls.productos, return_id=True, fecha_registro="NOW()", **producto)

        for id_cat in categorias:
            db.insert(cls.categorias_productos, 
                      id_producto=id_prod, 
                      id_categoria=id_cat)

        db.commit()

        db.close()

        return id
    
    @classmethod
    def modifyProducto(cls, producto, categorias):
        db = Database()

        SQL = "UPDATE productos SET "
        for field in producto:
            if field in ["id", "fecha_registro", "categorias", "categoriasname"]: continue

            SQL += f"{field} = :{field}, "
        
        SQL = SQL[:-2] + " WHERE id = :id"

        db.execute(SQL, **producto)

        # actualizar categorias
        db.execute("DELETE FROM categorias_productos WHERE id_producto = :id", id=producto['id'])

        for id_cat in categorias:
            db.insert(cls.categorias_productos,
                      id_producto=producto['id'], 
                      id_categoria=id_cat)
            
        db.commit()

        db.close()


    @classmethod
    def getVentas(cls):
        db = Database()

        ventas = db.query("""
            SELECT
                v.id,
                v.estado,
                u.nombre AS nombre_usuario,
                TO_CHAR(v.fecha_registro, 'DD/MM/YYYY') AS fecha_registro,
                COUNT(vp.id) AS cantidad_productos,
                CAST(SUM(vp.precio) AS DOUBLE PRECISION) AS valor_total,
                array_agg(p.nombre) AS nombres_productos 
            FROM ventas v
            JOIN usuarios u ON v.id_usuario = u.id
            JOIN ventas_productos vp ON v.id = vp.id_venta
            JOIN productos p ON vp.id_producto = p.id 
            GROUP BY 1,2,3,4
            
        """)

        db.close()

        return ventas
    
    @classmethod
    def updateStateVenta(cls, id, estado):
        db = Database()

        db.execute("UPDATE ventas SET estado = :estado WHERE id = :id", id=id, estado=estado)

        db.commit()

        db.close()