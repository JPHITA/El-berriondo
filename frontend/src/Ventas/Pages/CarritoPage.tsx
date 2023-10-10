import { Row, Col, Button } from 'react-bootstrap';

import { Header } from "./../components/Header.tsx";

export const CarritoPage = () => {

    return (
        <>
            <Header/>
            <Row>
                <Col>
                    <Button variant="primary">Button 1</Button>
                </Col>
                <Col>
                    <Button variant="secondary">Button 2</Button>
                </Col>
                <Col>
                    <Button variant="success">Button 3</Button>
                </Col>
            </Row>
        </>
    );
};
