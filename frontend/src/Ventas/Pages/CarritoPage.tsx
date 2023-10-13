import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import { CloseButton } from 'react-bootstrap';

import { Header } from "./../components/Header.tsx";
import { InfoProducto } from "./../components/InfoProducto.tsx";
import { SetterCantidadProd } from "./../components/SetterCantidadProd.tsx";
import { RecomendacionProd } from "./../components/RecomendacionProd.tsx";

import { getCarrito, editProductoCarrito, removeProductoCarrito, lengthCarrito, setCarrito as setCarritoMemory } from "./../../services/carrito.ts";
import { GetProducto } from "./../Utils.ts";

export const CarritoPage = () => {
    const navigate = useNavigate();

    const [carrito, setCarrito] = useState(getCarrito());
    const [precioTotal, setPrecioTotal] = useState(0);

    useEffect(function(){
        let precioTotal = 0;
        for (const [id, cantidad] of Object.entries(carrito)) {
            const producto = GetProducto(id);
            precioTotal += producto.precio * cantidad;
        }
        setPrecioTotal(precioTotal);
    }, [carrito]);

    function handleComprar() {
        alert("Comprado!");
        setCarritoMemory({});

        navigate("/");
    }

    return (
        <>
            <Header lengthCarrito={lengthCarrito()}/>
            <Container>

                <Row className="justify-content-around mb-3">
                    <Col lg={8} md={5} sm={12} className="text-center">
                        <h4>Precio total: ${precioTotal.toLocaleString()}</h4>

                    </Col>

                    <Col lg={4} md={5} sm={12}>
                        <div className="d-grid gap-2">
                            <Button variant="success" size="lg" onClick={handleComprar}>
                                Realizar Compra
                            </Button>
                        </div>
                    </Col>
                </Row>

                {Object.entries(carrito).map(([id, cantidad]) => {

                    const producto = GetProducto(parseInt(id));

                    return (
                        <Row className="mb-2 align-items-center" key={id}>
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
                                                        removeProductoCarrito(producto.id);
                                                        setCarrito(getCarrito());
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
                                                xs={12} md={6}
                                                descripcion={producto.descripcion_corta}
                                            />

                                            <Col xs={12} md={3} className="text-center">
                                                <h3>${(producto.precio*cantidad).toLocaleString()}</h3>
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
                                        setCarrito(getCarrito());
                                    }}
                                    handleAumentar={() => {
                                        editProductoCarrito(producto.id, Math.min(producto.stock, cantidad + 1));
                                        setCarrito(getCarrito());
                                    }}
                                />
                            </Col>
                        </Row>
                    )
                })}

                <Row>
                    <Col>
                        <RecomendacionProd height={120} />
                    </Col>

                    <Col>
                        <RecomendacionProd height={120} />
                    </Col>
                </Row>

            </Container>
        </>
    );
};
