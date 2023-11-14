import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

import { Header } from "../components/Header.tsx";
import { CardProducto } from "../components/CardProducto.tsx";
import { ModalRecomendacion } from "../components/ModalRecomendacion.tsx";
import { FiltroCategorias } from "../components/FiltroCategorias.tsx";

import { lengthCarrito } from "./../../services/carrito.ts";

import { Producto, MockProductos } from "../Mocks/Productos.ts";
import { fetchBackend } from "./../../services/backend.ts";

export const PrincipalPage = () => {
    const [productos, setProductos] = useState<Producto[]>([]); // Lista de productos a mostrar

    // Cargar productos desde el backend
    useEffect(function(){
        fetchBackend("/Ventas/getProductos", {
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
            }
        }).then( async res => {
            const data:Producto[] = await res.json();
            
            setProductos(data);
        })
    }, []);

    function handleFiltro(idFiltroCat: number) {
        if (idFiltroCat === -1) {
            setProductos(MockProductos);
        } else {
            setProductos(MockProductos.filter(producto => producto.categoria === idFiltroCat));
        }
    }

    return (
        <>
            <Header lengthCarrito={lengthCarrito()} />

            <Container>

                <FiltroCategorias handleFiltro={handleFiltro}/>

                        <Row className="justify-content-center">
                            {productos.map(function (prod, j) {
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