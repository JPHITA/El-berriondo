import { isInCarrito } from "../../services/carrito";

import { Producto } from "./../Mocks/Productos.ts";

interface SetterCantidadProps {
    producto: Producto;
    cantActual: number;
    setCantidad: (cant: number) => void;
    handleDisminuir?: () => void;
    handleAumentar?: () => void;
}

export const SetterCantidadProd = (props: SetterCantidadProps) => {

    function handleDisminuirCantidad() {
        if( !isInCarrito(props.producto.id) ){
            props.setCantidad(Math.max(1, props.cantActual - 1));
        }

        if (props.handleDisminuir) props.handleDisminuir();
    }

    function handleAumentarCantidad() {
        if( !isInCarrito(props.producto.id) ){
            props.setCantidad(Math.min(props.producto.stock, props.cantActual + 1));
        }

        if (props.handleAumentar) props.handleAumentar();
    }

    return (
        <>
            <div className="input-group">
                <span role="button" className="input-group-text" onClick={handleDisminuirCantidad}>-</span>

                <input
                    value={props.cantActual}
                    type="text"
                    className="form-control text-center"
                    disabled
                />

                <span role="button" className="input-group-text" onClick={handleAumentarCantidad}>+</span>
            </div>
        </>
    )
}