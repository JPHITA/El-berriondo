import { Card } from "react-bootstrap";

interface CardProductoProps {
    urlImagen: string;
}

export const CardProducto = (props: CardProductoProps) => {

    return (
        <Card>
            <Card.Img variant="top" className="img-fluid" src={props.urlImagen} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}