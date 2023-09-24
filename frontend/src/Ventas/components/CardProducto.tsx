import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

interface CardProductoProps {
    idProducto: number;
    urlImagen: string;
    title: string;
    text: string;
    precio: Number;
}

export const CardProducto = (props: CardProductoProps) => {

    const navigate = useNavigate();
    function handleClick() {
        navigate(`/Ventas/Detalle/${props.idProducto}`);
    }

    return (
        <Card border="dark" className="mb-3" style={{ height: "400px", cursor: "pointer" }} onClick={handleClick}>
            <Card.Img variant="top" className="img-fluid" src={props.urlImagen} style={{ height: "200px" }} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>
                    {props.precio.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                </Card.Subtitle>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}