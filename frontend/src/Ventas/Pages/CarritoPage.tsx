import { useState, useEffect } from "react";

import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import { CloseButton } from 'react-bootstrap';

import { Header } from "./../components/Header.tsx";
import { InfoProducto } from "./../components/InfoProducto.tsx";
import { SetterCantidadProd } from "./../components/SetterCantidadProd.tsx";

import { getCarrito, editProductoCarrito, removeProductoCarrito } from "./../../services/carrito.ts";
import { GetProducto } from "./../Utils.ts";

// TODO
// - Mostrar el precio total de la compra
// - Mostrar el precio total de cada producto
// - cambiar settercantidad para que las callbacks se pasen como parametros
//   en DetallePage y en CarritoPage

export const CarritoPage = () => {

    const [carrito, setCarrito] = useState(getCarrito());

    useEffect(function(){
        
    }, [carrito]);

    return (
        <>
            <Header />
            <Container>

                <Row className="justify-content-end mb-3">
                    <Col lg={4} md={5} sm={12}>
                        <div className="d-grid gap-2">
                            <Button variant="success" size="lg">
                                Realizar Compra
                            </Button>
                        </div>
                    </Col>
                </Row>

                {Object.entries(carrito).map(([id, cantidad]) => {

                    const producto = GetProducto(parseInt(id));

                    return (
                        <Row className="mb-2" key={id}>
                            <Col md={10} sm={12}>
                                <Card>
                                    <Card.Header>
                                        <Row>

                                            <Col xs={10} md={11}>
                                                <h5>{producto.nombre}</h5>
                                            </Col>

                                            <Col xs={2} md={1}>
                                                <CloseButton
                                                    onClick={() => {
                                                        // removeProductoCarrito(producto.id);
                                                        // setCarrito(Object.entries(getCarrito()));
                                                    }}
                                                />
                                            </Col>

                                        </Row>
                                    </Card.Header>

                                    <Card.Body>
                                        <Row>

                                            <Col xs={12} md={3} className="text-center">
                                                <img src={producto.urlimg} alt={producto.nombre} style={ {height: "110px"} } className="img-fluid" />
                                            </Col>

                                            <InfoProducto
                                                descripcion={producto.descripcion_corta}
                                            />

                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={2} sm={12} className="text-center">
                                <SetterCantidadProd
                                    producto={producto}
                                    cantActual={cantidad}
                                    setCantidad={(cant) => {
                                        console.log("setCantidad", cant);
                                        editProductoCarrito(producto.id, cant);
                                        setCarrito(getCarrito());
                                    }}
                                />
                            </Col>
                        </Row>
                    )
                })}

            </Container>
        </>
    );
};
