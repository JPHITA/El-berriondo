import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Header } from '../components/Header';
import { RecomendacionProd } from "../components/RecomendacionProd.tsx";
import { SetterCantidad } from "../components/SetterCantidad.tsx";


import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { MockProductos } from "./../Mocks/Productos.ts";

import "./../../assets/Ventas/css/DetallePage.css"


export const DetallePage = () => {

    const [cant_a_llevar, setCant_a_llevar] = useState(1);

    const { idProducto } = useParams();
    const location = useLocation();

    useEffect(() => { setCant_a_llevar(1) }, [location]);

    const producto = MockProductos.find(producto => producto.id == parseInt(idProducto!))!;

    let publicidad = <></>;
    if(producto.stock == 0){
        publicidad = <>
            <h1>publicidad</h1>
        </>;
    }

    return (
        <>
            <Header />

            <Container>

                {/* solo se muestra para pantallas sm */}
                <Row id="nombre-producto-sm">
                    <Col>
                        <h2 style={{ color: "gray" }}>{producto.nombre}</h2>
                    </Col>
                </Row>

                <Row>

                    <Col xs={12} md={8}>
                        <Image className='img-principal' src={producto.urlimg} fluid thumbnail />
                    </Col>

                    <Col xs={12} md={4} className='text-md-center'>

                        {
                            producto.stock > 0 ?
                                <>
                                <Row className="mt-md-5">
                                    <Col>
                                        <h2>
                                            {producto.precio.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })}
                                        </h2>
                                    </Col>
                                </Row>

                                <Row className="mt-md-5">
                                    <Col>
                                        <h5 style={{ color: "gray" }}>
                                            Disponibles: {producto.stock}
                                        </h5>
                                    </Col>
                                </Row>

                                <Row className="mt-md-3 justify-content-center">
                                    <Col md={8}>
                                        <SetterCantidad
                                            cantActual={cant_a_llevar}
                                            handleAumentar={() => setCant_a_llevar(Math.max(1, cant_a_llevar - 1))}
                                            handleDisminuir={() => setCant_a_llevar(Math.min(producto.stock, cant_a_llevar + 1))}
                                        />
                                    </Col>
                                </Row>

                                <Row className="mt-md-5 pt-md-4 mt-3 justify-content-center">
                                    <Col>
                                        <div className="d-grid gap-2">
                                            <Button variant="primary" size="lg">
                                                Agregar al carrito
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                                </>

                            : // else
                                <>
                                <Row className='text-center'>
                                    <h3 style={{ color: "red" }}>Producto no disponible</h3>
                                </Row>

                                <Row className="no-mostrar-en-sm">
                                    {publicidad}
                                </Row>
                                </>
                        }

                    </Col>

                </Row>

                <Row className='mt-md-4 mt-3'>
                    <Col xs={12} md={8}>
                        <Row id="nombre-producto-md">
                            <h1>{producto.nombre}</h1>
                        </Row>

                        <Row>
                            <h5 style={{ color: "gray" }}>Descripcion del producto</h5>
                        </Row>

                        <Row>
                            <p className="text-break" style={{ textAlign: "justify" }}>
                                {producto.descripcion_larga}
                            </p>
                        </Row>
                    </Col>

                    <Col xs={12} md={4}>

                        {
                            producto.stock > 0 ?
                                <>
                                <h5 style={{ color: "gray" }}>Tal vez te interese</h5>
                                <RecomendacionProd height={150} />
                                </>

                            : // else
                                <div className='no-mostrar-en-md'>
                                    {publicidad}
                                </div>
                        }

                    </Col>
                </Row>

            </Container>
        </>
    )

}