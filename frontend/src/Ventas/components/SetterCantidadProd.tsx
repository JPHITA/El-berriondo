import { isInCarrito } from "../../services/carrito";

import { Producto } from "./../Mocks/Productos.ts";

interface SetterCantidadProps {
    producto: Producto;
    cantActual: number;
    setCantidad: (cant: number) => void;
}

export const SetterCantidadProd = (props: SetterCantidadProps) => {

    function handleDisminuirCantidad() {
        if( !isInCarrito(props.producto.id) ){
            props.setCantidad(Math.max(1, props.cantActual - 1));
        }
    }

    function handleAumentarCantidad() {
        if( !isInCarrito(props.producto.id) ){
            props.setCantidad(Math.min(props.producto.stock, props.cantActual + 1));
        }
    }

    return (
        <>
            <div className="input-group">
                <span role="button" className="input-group-text" onClick={handleDisminuirCantidad}>-</span>

                <input
                    value={`llevar ${props.cantActual}`}
                    type="text"
                    className="form-control text-center"
                    disabled
                />

                <span role="button" className="input-group-text" onClick={handleAumentarCantidad}>+</span>
            </div>
        </>
    )
}