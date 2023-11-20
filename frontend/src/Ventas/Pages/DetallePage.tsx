import { useState, useEffect, useReducer, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Header } from '../components/Header';
import { RecomendacionProd } from "../components/RecomendacionProd.tsx";
import { SetterCantidadProd } from "../components/SetterCantidadProd.tsx";
import { MultiRecomendacionProd } from "../components/MultiRecomendacionProd.tsx";
import { InfoProducto } from "../components/InfoProducto.tsx";
import { ButtonAgregarProd } from "../components/ButtonAgregarProd.tsx";

import { addProductoCarrito, isInCarrito, getCarrito, lengthCarrito } from "./../../services/carrito.ts";
import { Producto } from '../../types.ts';

import { fetchBackend } from '../../services/backend.ts';

import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import "./../../assets/Ventas/css/DetallePage.css"


/*
cuando hay stock:
    - se muestra el precio
    - se muestra la cantidad disponible
    - se muestra la opcion para seleccionar la cantidad a llevar
    - se muestra el boton para agregar al carrito
    - se muestra una recomendacion de producto

cuando no hay stock:
    - se muestra un mensaje de que el producto no esta disponible
    - se muestra 4 recomendaciones de producto
*/

const Dummyproducto: Producto = {
    id: -1,
    nombre: "",
    descripcion_corta: "",
    descripcion_larga: "",
    precio: 1000,
    stock: -1,
    urlimg: "https://cdn-icons-png.flaticon.com/512/8676/8676496.png",
    categorias: undefined
}


export const DetallePage = () => {
    const { idProducto } = useParams(); // id del producto a mostrar
    const location = useLocation();
    const [_, forceUpdate] = useReducer(x => x + 1, 0); // para actualizar cuando se añade al carrito

    const excludeProds = useRef<number[]>([parseInt(idProducto!)]); // para excluir productos de las recomendaciones
    excludeProds.current[0] = parseInt(idProducto!);

    const [cant_a_llevar, setCant_a_llevar] = useState<number>(1); // estado para la cantidad a llevar
    const [producto, setProducto] = useState<Producto>(Dummyproducto); // estado para el producto a mostrar

    useEffect(function () {

        const abortController = new AbortController();
        const signal = abortController.signal;
        
        // obtener el producto desde el backend
        fetchBackend(`/Ventas/getProducto/${idProducto}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            signal: signal
        }).then(async (res) => {
            const data: Producto = await res.json();

            if (isInCarrito(data.id)) {
                setCant_a_llevar(getCarrito()[data.id].cantidad);
            } else {
                setCant_a_llevar(1);
            }
            
            setProducto(data);
        }).catch(err => {
            console.log(err);
        });

        return () => { abortController.abort() }
        
    }, [location, idProducto]);

    // ### funciones para manejar los eventos de los componentes ###
    function handleAgregarAlCarrito() {
        if (!isInCarrito(producto.id)) {
            addProductoCarrito(producto.id, cant_a_llevar, producto.precio);
            forceUpdate();
        }
    }

    function handleDisminuir(){
        if( !isInCarrito(producto.id) ){
            setCant_a_llevar(Math.max(1, cant_a_llevar - 1));
        }
    }

    function handleAumentar(){
        if( !isInCarrito(producto.id) ){
            setCant_a_llevar(Math.min(producto.stock, cant_a_llevar + 1));
        }
    }
    // ##############################################################

    return (
        <>
            <Header lengthCarrito={lengthCarrito()}/>

            <Container>
                {/* solo se muestra para pantallas sm */}
                <Row className='no-mostrar-en-md'>
                    <Col>
                        <h2 style={{ color: "gray" }}>{producto.nombre}</h2>
                    </Col>
                </Row>

                <Row>

                    <Col xs={12} md={8}> <Image className='img-principal' src={producto.urlimg} fluid thumbnail />
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
                                            <SetterCantidadProd
                                                cantActual={cant_a_llevar}
                                                handleDisminuir={handleDisminuir}
                                                handleAumentar={handleAumentar}
                                            />
                                        </Col>
                                    </Row>

                                    <ButtonAgregarProd
                                        idProducto={producto.id}
                                        handleAgregarAlCarrito={handleAgregarAlCarrito}
                                    />

                                    <Row>
                                        <InfoProducto
                                            className="no-mostrar-en-md"
                                            xs={12} md={8}
                                            nombre={producto.nombre}
                                            descripcion={producto.descripcion_larga}
                                        />
                                    </Row>
                                </>

                                : // else
                                <>
                                    <Row className='text-center'>
                                        <h3 style={{ color: "red" }}>Producto no disponible</h3>
                                    </Row>

                                    <Row>
                                        <InfoProducto
                                            className="no-mostrar-en-md"
                                            xs={12} md={8}
                                            nombre={producto.nombre}
                                            descripcion={producto.descripcion_larga}
                                        />
                                    </Row>

                                    <Row>
                                        <h5 style={{ color: "gray" }}>Tal vez te interese</h5>
                                    </Row>

                                    <MultiRecomendacionProd height={138}
                                    excludeIdProds={excludeProds.current}
                                    categorias={producto.categorias}
                                    nombre={producto.nombre}
                                    />
                                </>
                        }

                    </Col>

                </Row>

                <Row className='mt-md-4 mt-3'>
                    <InfoProducto
                        className="no-mostrar-en-sm"
                        xs={12} md={8}
                        nombre={producto.nombre}
                        descripcion={producto.descripcion_larga}
                    />
                    <Col xs={12} md={4}>

                        {
                            producto.stock > 0 ?
                                <>
                                    <h5 style={{ color: "gray" }}>Tal vez te interese</h5>
                                    <RecomendacionProd height={150}
                                    excludeProds={excludeProds.current}
                                    categorias={producto.categorias}
                                    nombre={producto.nombre}
                                    />
                                </>

                                : // else
                                <></>
                        }

                    </Col>
                </Row>
            </Container>
        </>
    )

}