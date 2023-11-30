export interface Producto {
    id: number;
    nombre: string;
    descripcion_larga: string;
    descripcion_corta: string;
    precio: number;
    stock: number;
    urlimg: string;
    categorias?: number[];
    activo: boolean;
}

export interface Categoria{
    id: number,
    nombre: string,
    fecha_registro: string,
}

export interface Venta {
    id: number;
    id_usuario: number;
    estado: string;
    fecha_registro: Date;
}