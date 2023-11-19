import { Col, Row } from "react-bootstrap";

import { RecomendacionProd } from "./RecomendacionProd.tsx";


interface MultiRecomendacionProdProps {
    height: number;
    excludeIdProds?: number[];
}

// Componente que muestra 4 recomendaciones de productos

export const MultiRecomendacionProd = (props: MultiRecomendacionProdProps) => {
    return (
        <>
            <Row>
                <Col md={6} sm={6} xs={6}>
                    <RecomendacionProd height={props.height} excludeIdProds={props.excludeIdProds}/>
                </Col>
                <Col md={6} sm={6} xs={6}>
                    <RecomendacionProd height={props.height} excludeIdProds={props.excludeIdProds}/>
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={6} xs={6}>
                    <RecomendacionProd height={props.height} excludeIdProds={props.excludeIdProds}/>
                </Col>
                <Col md={6} sm={6} xs={6}>
                    <RecomendacionProd height={props.height} excludeIdProds={props.excludeIdProds}/>
                </Col>
            </Row>
        </>
    )
}