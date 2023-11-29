import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

import { Header } from "../components/Header.tsx";
import { CardProducto } from "../components/CardProducto.tsx";
import { ModalRecomendacion } from "../components/ModalRecomendacion.tsx";
import { FiltroCategorias } from "../components/FiltroCategorias.tsx";

import { lengthCarrito } from "./../../services/carrito.ts";

import { Producto } from "./../../types.ts";

import { fetchBackend } from "./../../services/backend.ts";

export const PrincipalPage = () => {
    const [productos, setProductos] = useState<Producto[]>([]); // Lista de productos
    const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([]); // Lista de productos filtrados por categoría

    // Cargar productos desde el backend
    useEffect(function(){
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetchBackend("/Ventas/getProductos", {
            method: "GET", 
            signal: signal,
            headers: {
                "Content-Type": "application/json",
            }
        }).then( async res => {
            const data:Producto[] = await res.json();
            
            setProductos(data);
            setProductosFiltrados(data);
        }).catch( err => {
            console.log(err);
        });

        return () => { abortController.abort() }
    }, []);

    function handleFiltro(idFiltroCat: number) {
        if (idFiltroCat === -1) {
            setProductosFiltrados(productos);
        } else {
            setProductosFiltrados(productos.filter(producto => producto.categorias?.includes(idFiltroCat)));
        }
    }

    return (
        <>
            <Header lengthCarrito={lengthCarrito()} />

            <Container>

                <FiltroCategorias handleFiltro={handleFiltro}/>

                        <Row className="justify-content-center">
                            {productosFiltrados.map(function (prod, j) {
                                return (
                                    <Col key={j} lg={3} md={4} sm={6} xs={8} >
                                        <CardProducto
                                            idProducto={prod.id}
                                            urlImagen={prod.urlimg}
                                            title={prod.nombre}
                                            text={prod.descripcion_corta}
                                            precio={prod.precio}
                                        />
                                    </Col>
                                )
                            })}
                        </Row>

            </Container>


            <ModalRecomendacion />
        </>
    )
};