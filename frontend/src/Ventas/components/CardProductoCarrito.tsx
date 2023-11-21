import { Row, Col, Card, CloseButton } from "react-bootstrap";

import { InfoProducto } from "./../components/InfoProducto.tsx";
import { SetterCantidadProd } from "./../components/SetterCantidadProd.tsx";

import { getCarrito, editProductoCarrito, removeProductoCarrito } from "./../../services/carrito.ts";

import { Producto } from "./../../types.ts";

interface CardProductoCarritoProps {
    producto: Producto,
    cantidad: number,
    setCarritoState: (carrito: {[id: string]: number}) => void,
}

// TODO
// - restringir que no se muestre publcidad de productos que ya estan en el carrito
// - registrar la compra

export const CardProductoCarrito = (props: CardProductoCarritoProps) => {

    const { producto, cantidad, setCarritoState } = props;

    return (
        <Row className="mb-2 align-items-center">
            <Col md={10} sm={12}>
                <Card>
                    <Card.Header>
                        <Row>

                            <Col xs={10} md={11}>
                                <h5>{producto?.nombre}</h5>
                            </Col>

                            <Col xs={2} md={1}>
                                <CloseButton
                                    onClick={() => {
                                        removeProductoCarrito(producto.id);
                                        setCarritoState(getCarrito());
                                    }}
                                />
                            </Col>

                        </Row>
                    </Card.Header>

                    <Card.Body>
                        <Row>

                            <Col xs={12} md={3} className="text-center">
                                <img src={producto?.urlimg} alt={producto?.nombre} style={ {height: "110px"} } className="img-fluid" />
                            </Col>

                            <InfoProducto
                                xs={12} md={6}
                                descripcion={producto?.descripcion_corta || ""}
                            />

                            <Col xs={12} md={3} className="text-center">
                                {producto?.precio ? 
                                    <h3>${(producto.precio*cantidad).toLocaleString()}</h3>
                                    : // else
                                    <></>
                                }
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={2} sm={12} className="text-center mb-2">
                <SetterCantidadProd
                    cantActual={cantidad}
                    handleDisminuir={() => {
                        editProductoCarrito(producto.id, Math.max(1, cantidad - 1));
                        setCarritoState(getCarrito());
                    }}
                    handleAumentar={() => {
                        editProductoCarrito(producto.id, Math.min(producto.stock, cantidad + 1));
                        setCarritoState(getCarrito());
                    }}
                />
            </Col>
        </Row>
    )
}