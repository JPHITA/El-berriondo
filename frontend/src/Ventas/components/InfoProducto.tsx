import { Col, Row } from "react-bootstrap";

interface InfoProductoProps {
    className?: string;
    nombre: string;
    descripcion: string;
}

export const InfoProducto = (props: InfoProductoProps) => {

    return (
        <>
            <Col xs={12} md={8} className={props.className}>
                <Row>
                    <h1>{props.nombre}</h1>
                </Row>

                <Row>
                    <h5 style={{ color: "gray" }}>Descripcion del producto</h5>
                </Row>

                <Row>
                    <p className="text-break" style={{ textAlign: "justify" }}>
                        {props.descripcion}
                    </p>
                </Row>
            </Col>
        </>
    )
}