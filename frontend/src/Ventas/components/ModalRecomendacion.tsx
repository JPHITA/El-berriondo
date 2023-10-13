import { useState, useEffect } from "react"
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { RandomProducto } from "./../Utils.ts";
import { Producto } from "../Mocks/Productos.ts";

// Componente que muestra un modal con un producto recomendado en la pagina principal

/*
1. El modal inicia oculto
2. se ejecuta el useEffect y deja el timer para mostrar el modal en 30 segundos
3. se muestra el modal, y cuando el usuario lo cierra se cambia el state de showModal a false, 
   lo que vuelve a ejecutar el useEffect, y asi queda en ciclo
*/

export const ModalRecomendacion = () => {
    const [showModal, setShowModal] = useState(false);                          //state para mostrar el modal
    const [RecProducto, setRecProducto] = useState<Producto>(RandomProducto()); //state para guardar el producto que se recomendara

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            
            setShowModal(true);

        }, 20 * 1000);

        return () => {clearTimeout(timer)};
    }, [showModal]);

    function handleClick() {
        navigate(`/Ventas/Detalle/${RecProducto.id}`)
    }

    return (
        <Modal
        show={showModal}
        animation={false}
        onHide={() => {
            setShowModal(false);
            
            //se cambia el producto que se recomendara
            setRecProducto(RandomProducto());
         }}
        aria-labelledby="example-modal-sizes-title-sm"
        >
        <Modal.Header closeButton />
        <Modal.Body className="text-center" style={{ cursor: "pointer" }} onClick={handleClick}>
            <h4>Producto recomendado: <b>{RecProducto.nombre}</b></h4>
            <img src={RecProducto.urlimg}  className="img-fluid"/>
        </Modal.Body>
      </Modal>
    )
}