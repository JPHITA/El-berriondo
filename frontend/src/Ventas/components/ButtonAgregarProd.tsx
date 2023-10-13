import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

import { useLocation } from 'react-router-dom';

import { isInCarrito } from "./../../services/carrito.ts";

interface ButtonAgregarProdProps {
    idProducto: number;
    handleAgregarAlCarrito: () => void;
}

// Componente que muestra un boton para agregar un producto al carrito

const agregado = { texto: "Agregado", color: "success", disabled: true };
const agregar = { texto: "Agregar al carrito", color: "primary", disabled: false };

export const ButtonAgregarProd = (props: ButtonAgregarProdProps) => {
    const location = useLocation();

    // estado para manejar el texto del boton
    const [infoBotonCarrito, setInfoBotonCarrito] = useState(agregar);

    // cuando cambia la ubicacion, cambiar el texto del boton segun si esta o no en el carrito
    useEffect(() => {
        if (isInCarrito(props.idProducto)) {
            setInfoBotonCarrito(agregado);
        } else {
            setInfoBotonCarrito(agregar);
        }

    }, [location]);

    return (
        <>
            <Row className="mt-md-5 pt-md-4 mt-3 justify-content-center">
                <Col>
                    <div className="d-grid gap-2">
                        <Button
                            size="lg"
                            variant={infoBotonCarrito.color}
                            onClick={
                                () => {
                                    setInfoBotonCarrito(agregado);
                                    props.handleAgregarAlCarrito();
                                }
                            }
                            disabled={infoBotonCarrito.disabled}>

                            {infoBotonCarrito.texto}

                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}