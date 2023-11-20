// se guarda en formato {idProducto: cantidad}
interface ProductoCarrito {
  [key: string | number]: {
    cantidad: number;
    precio: number;
  };
}

// Obtiene todo el carrito de compras
function getCarrito(): ProductoCarrito {
return JSON.parse(sessionStorage.getItem('carrito') || '{}');
}

// Sobreescribe el carrito de compras
function setCarrito(carrito: any) {
sessionStorage.setItem('carrito', JSON.stringify(carrito));
}

// verifica si un producto esta en el carrito de compras
function isInCarrito(id: string|number) {
let carrito = getCarrito();

return id in carrito;
}

// Agrega un producto al carrito de compras
function addProductoCarrito(id: string|number, cantidad: number, precio: number) {
  let carrito = getCarrito();

  if(!(id in carrito)){
    carrito[id] = {
      cantidad,
      precio,
    }

    setCarrito(carrito);
  }
}

// Elimina un producto del carrito de compras
function removeProductoCarrito(id: string|number) {
  let carrito = getCarrito();
  delete carrito[id];
  setCarrito(carrito);
}

// Edita la cantidad de un producto en el carrito de compras
function editProductoCarrito(id: string|number, cantidad: number) {
  let carrito = getCarrito();
  carrito[id].cantidad = cantidad;
  setCarrito(carrito);
}

// Obtiene la cantidad de productos en el carrito de compras
function lengthCarrito() {
  let carrito = getCarrito();
  return Object.keys(carrito).length;
}

// Limpia el carrito de compras
function clearCarrito() {
  setCarrito({});
}

export {
  getCarrito,
  setCarrito,
  isInCarrito,
  addProductoCarrito,
  removeProductoCarrito,
  editProductoCarrito,
  lengthCarrito,
  clearCarrito,
}