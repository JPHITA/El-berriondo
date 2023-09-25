import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Header } from '../components/Header';
import { RecomendacionProd } from "../components/RecomendacionProd.tsx";
import { SetterCantidad } from "../components/SetterCantidad.tsx";
import { GetProducto } from "./../Utils.ts";
import { addProductoCarrito, isInCarrito, lengthCarrito, getCarrito } from "./../../services/carrito.ts";


import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import "./../../assets/Ventas/css/DetallePage.css"

// TODO
// no dejar que aumenten la cantidad de los productos que ya estan en el carrito

export const DetallePage = () => {

    const [cant_a_llevar, setCant_a_llevar] = useState<number>(1); // estado para la cantidad a llevar
    const [infoBotonCarrito, setInfoBotonCarrito] = useState({ texto: "Agregar al carrito", color: "primary", disabled: false }); // estado para el boton de agregar al carrito

    const { idProducto } = useParams(); // id del producto a mostrar
    const location = useLocation();

    const producto = GetProducto(parseInt(idProducto!))!;

    useEffect(() => { 
        if (isInCarrito(producto.id)) {
            setCant_a_llevar(getCarrito()[producto.id]);
            setInfoBotonCarrito({ texto: "Agregado", color: "success", disabled: true });
        } else {
            setCant_a_llevar(1);
            setInfoBotonCarrito({ texto: "Agregar al carrito", color: "primary", disabled: false });
        }
     }, [location]);

    function handleAgregarAlCarrito() {
        if (!isInCarrito(producto.id)) {
            addProductoCarrito(producto.id, cant_a_llevar);
            setInfoBotonCarrito({ texto: "Agregado", color: "success", disabled: true });
            
            console.log("Carrito: ", lengthCarrito());
        }
    }

    return (
        <>
            <Header />

            <Container>
                <div className=''>
                    {/* solo se muestra para pantallas sm */}
                    <Row className='no-mostrar-en-md'>
                        <Col>
                            <h2 style={{ color: "gray" }}>{producto.nombre}</h2>
                        </Col>
                    </Row>

                    <Row className="order-2">

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
                                                    <Button
                                                    size="lg"
                                                    variant={infoBotonCarrito.color}
                                                    onClick={handleAgregarAlCarrito}
                                                    disabled={infoBotonCarrito.disabled}>

                                                        {infoBotonCarrito.texto}

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

                                        <Row className="no-mostrar-en-md">
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
                                        </Row>

                                        <Row>
                                            <h5 style={{ color: "gray" }}>Tal vez te interese</h5>
                                        </Row>
                                        <Row>
                                            <Col md={6} sm={6} xs={6}>
                                                <RecomendacionProd height={138}/>
                                            </Col>
                                            <Col md={6} sm={6} xs={6}>
                                                <RecomendacionProd height={138}/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6} sm={6} xs={6}>
                                                <RecomendacionProd height={138}/>
                                            </Col>
                                            <Col md={6} sm={6} xs={6}>
                                                <RecomendacionProd height={138}/>
                                            </Col>
                                        </Row>

                                    </>
                            }

                        </Col>

                    </Row>

                    <Row className='order-1 mt-md-4 mt-3'>
                        <Col xs={12} md={8} className="no-mostrar-en-sm">
                            <Row>
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
                                    <></>
                            }

                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )

}