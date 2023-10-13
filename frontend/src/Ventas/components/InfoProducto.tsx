import { Col, Row } from "react-bootstrap";

interface InfoProductoProps {
    className?: string;
    xs?: number;
    sm?: number;
    md?: number;
    nombre?: string;
    descripcion: string;
}

// componente que muestra la informacion de un producto

export const InfoProducto = (props: InfoProductoProps) => {

    return (
        <>
            <Col xs={props.xs} sm={props.sm} md={props.md} className={props.className}>
                {props.nombre ? (
                    <Row>
                        <h1>{props.nombre}</h1>
                    </Row>
                ) : 
                    <></>
                }

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