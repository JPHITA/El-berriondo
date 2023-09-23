import { Carousel, Container, Row, Col } from "react-bootstrap";

import { Header } from "./components/Header.tsx";
import { CardProducto } from "./components/CardProducto.tsx";

export const PrincipalPage = () => {
    const nCarruseles = 2;      // numero de carruseles
    const nCartas = 12;         // cada carrusel tendra esta cantidad de cartas
    const cartas_por_vista = 4; // cada slide del carrusel tendra esta cantidad de cartas

    return (
        <>
            <Header/>

            <Container>

                {/* numero de carruseles */}
                {Array.from({length: nCarruseles}, (_, i) => (
                    <Carousel key={i} className="mb-5">

                        {/* numero de grupos de cartas */}
                        {Array.from({length: nCartas/cartas_por_vista}, (_, j) => (
                            <Carousel.Item key={j}>
                                <Row>

                                    {/* numero de cartas por grupo */}
                                    {Array.from({length: cartas_por_vista}, (_, k) => (
                                        <Col xs={12} sm={12/cartas_por_vista} md={12/cartas_por_vista} key={k}>
                                            <CardProducto
                                                urlImagen={"https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200612/196177803-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustraci%C3%B3n-de-alta-calidad.jpg"}
                                            />
                                        </Col>
                                    ))}

                                </Row>
                            </Carousel.Item>
                        ))}

                    </Carousel>
                ))}

            </Container>
        </>
    )
};