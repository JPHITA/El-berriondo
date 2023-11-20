export interface Producto {
    id: number;
    nombre: string;
    descripcion_larga: string;
    descripcion_corta: string;
    precio: number;
    stock: number;
    urlimg: string;
    categorias?: number[];
}

export interface Categoria{
    id: number,
    nombre: string,
}