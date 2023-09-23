import { Card } from "react-bootstrap";

interface CardProductoProps {
    idProducto: number;
    urlImagen: string;
    title: string;
    text: string;
    precio: Number;
}

export const CardProducto = (props: CardProductoProps) => {

    return (
        <Card border="dark" className="mb-3" style={{ height: "400px" }}>
            <a href={"#" + props.idProducto} style={{ textDecoration: "none", color: "inherit"}}>
                <Card.Img variant="top" className="img-fluid" src={props.urlImagen} style={{ height: "200px" }} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle>
                        {props.precio.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                    </Card.Subtitle>
                    <Card.Text>{props.text}</Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
}