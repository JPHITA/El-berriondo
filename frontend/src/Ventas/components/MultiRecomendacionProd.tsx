import { Col, Row } from "react-bootstrap";

import { RecomendacionProd } from "./RecomendacionProd.tsx";


interface MultiRecomendacionProdProps {
    height: number;
}

export const MultiRecomendacionProd = (props: MultiRecomendacionProdProps) => {
    return (
        <>
            <Row>
                <Col md={6} sm={6} xs={6}>
                    <RecomendacionProd height={props.height} />
                </Col>
                <Col md={6} sm={6} xs={6}>
                    <RecomendacionProd height={props.height} />
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={6} xs={6}>
                    <RecomendacionProd height={props.height} />
                </Col>
                <Col md={6} sm={6} xs={6}>
                    <RecomendacionProd height={props.height} />
                </Col>
            </Row>
        </>
    )
}