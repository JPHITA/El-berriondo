import { MockProductos, Producto } from "./Mocks/Productos.ts";

function RandomProducto(): Producto {
    return MockProductos[Math.floor(Math.random() * MockProductos.length)];
}

function GetProducto(id: Number): Producto {
    return MockProductos.find((producto) => producto.id === id)!;
}

export {
    RandomProducto,
    GetProducto
}