import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Row, Col, Button, Container } from 'react-bootstrap';

import { Header } from "./../components/Header.tsx";
import { CardProductoCarrito } from "../components/CardProductoCarrito.tsx";
import { RecomendacionProd } from "./../components/RecomendacionProd.tsx";

import { getCarrito, lengthCarrito, clearCarrito } from "./../../services/carrito.ts";

import { fetchBackend } from '../../services/backend.ts';
import { Producto } from "../../types.ts";

export const CarritoPage = () => {
    const navigate = useNavigate();

    const [carrito, setCarrito] = useState(getCarrito()); // estado para manejar el carrito
    const [productosCarrito, setProductosCarrito] = useState<Producto[]>(); // estado para manejar los productos del carrito
    const [precioTotal, setPrecioTotal] = useState(0); // estado para manejar el precio total del carrito

    const excludeProds = useRef<number[]>([]); // se excluyen de la publicidad, los productos que ya estan en el carrito

    const idUsuario = 2; // TODO: obtener el id del usuario logueado

    useEffect(function(){
        const abortController = new AbortController();
        const signal = abortController.signal;

        if (lengthCarrito() > 0) {
            fetchBackend("/Ventas/getProductos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "idProds": Object.keys(carrito).map((id) => parseInt(id))
                }),
                signal: signal
            }).then(async(res) => {

                    const data: Producto[] = await res.json();
                    setProductosCarrito(data);
                    setPrecioTotal( data.reduce((prev, p) => prev + (p.precio * carrito[p.id]), 0) );

                }).catch((err) => {
                    console.log(err);
                });
        }

        excludeProds.current = Object.keys(carrito).map(id => parseInt(id));

        return () => { abortController.abort(); }
        
    }, []);

    useEffect(function(){
        // actualiza los productos con los que estan en el carrito
        const nuevosProductosCarrito = productosCarrito?.filter((p) => p.id in carrito);

        // actualiza el precio total de los productos que estan en el carrito
        const precioNuevo = nuevosProductosCarrito?.reduce((prev, p) => prev + (p.precio * carrito[p.id]), 0) || 0;
        setPrecioTotal(precioNuevo);
        

        setProductosCarrito(nuevosProductosCarrito);
    }, [carrito]);

    function handleComprar(){

        fetchBackend("/Ventas/SaveVenta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "idUsuario": idUsuario,
                "productos": productosCarrito?.map(p => ({
                    "idProducto": p.id,
                    "cantidad": carrito[p.id] || 0,
                    "precio": p.precio
                }))
            })
        }).then(async(res) => {
                const data = await res.text();
                console.log(data);
            }).catch((err) => {
                console.log(err);
        })

        clearCarrito();
        navigate("/Ventas/Principal");
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
                            <Button variant="success" size="lg" onClick={handleComprar} disabled={lengthCarrito() === 0}>
                                Realizar Compra
                            </Button>
                        </div>
                    </Col>
                </Row>

                {productosCarrito?.map((producto, i) => (
                    <CardProductoCarrito
                        key={i}
                        producto={producto}
                        cantidad={carrito[producto.id]}
                        setCarritoState={setCarrito}
                    />
                ))}

                <Row>
                    <Col>
                        <RecomendacionProd height={120} excludeProds={excludeProds.current}/>
                    </Col>

                    <Col>
                        <RecomendacionProd height={120} excludeProds={excludeProds.current}/>
                    </Col>
                </Row>

            </Container>
        </>
    );
};
