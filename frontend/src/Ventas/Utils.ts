import { MockProductos, Producto } from "./Mocks/Productos.ts";

function RandomProducto(): Producto {
    return MockProductos[Math.floor(Math.random() * MockProductos.length)];
}

export {
    RandomProducto
}