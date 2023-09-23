import { Carousel, Container, Row, Col } from "react-bootstrap";

import { Header } from "../components/Header.js";
import { CardProducto } from "../components/CardProducto.js";
import { ModalRecomendacion }  from "../components/ModalRecomendacion.js";

import { RandomProducto } from "./../Utils.ts";

export const PrincipalPage = () => {
    const nCarruseles = 2;      // numero de carruseles
    const nCartas = 12;         // cada carrusel tendra esta cantidad de cartas
    const cartas_por_vista = 4; // cada slide del carrusel tendra esta cantidad de cartas

    return (
        <>
            <Header />

            <Container>

                {/* numero de carruseles */}
                {Array.from({ length: nCarruseles }, (_, i) => (
                    <Carousel key={i} className="mb-5">

                        {/* numero de grupos de cartas */}
                        {Array.from({ length: nCartas / cartas_por_vista }, (_, j) => (
                            <Carousel.Item key={j}>
                                <Row>

                                    {/* numero de cartas por grupo */}
                                    {Array.from({ length: cartas_por_vista }, (_) => {
                                        let producto = RandomProducto();

                                        return (
                                            <Col xs={12} sm={6} md={12/cartas_por_vista} key={producto.id}>
                                                <CardProducto
                                                    idProducto={producto.id}
                                                    urlImagen={producto.urlimg}
                                                    title={producto.nombre}
                                                    precio={producto.precio}
                                                    text={producto.descripcion_corta}
                                                />
                                            </Col>
                                        )
                                    })}

                                </Row>
                            </Carousel.Item>
                        ))}

                    </Carousel>
                ))}

            </Container>


            <ModalRecomendacion />
        </>
    )
};