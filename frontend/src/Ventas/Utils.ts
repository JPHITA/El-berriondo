import { MockProductos, Producto } from "./Mocks/Productos.ts";

function RandomProducto(): Producto {
    return MockProductos[Math.floor(Math.random() * MockProductos.length)];
}

function GetProducto(id: number | string): Producto {
    const idP: string = id.toString();

    return MockProductos.find((producto) => producto.id === parseInt(idP))!;
}

export {
    RandomProducto,
    GetProducto
}