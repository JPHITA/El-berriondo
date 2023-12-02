import './LoginCss.css'
import {useNavigate} from "react-router-dom";
import {Button, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
export default function FinRegistro(){
    const navigate =useNavigate();
    const NavPanLogin=() =>{
        navigate('/Login')
    }

    return(
        <>
            <Row className="Background g-0 vh-100 justify-content-center align-items-center login-container">

                <Col className="col-10 row g-0 align-items-center border rounded bg-white">

                    <Col className="col-6">
                        <Image src="https://raw.githubusercontent.com/JPHITA/El-berriondo/David/frontend/src/assets/Backgroungberriondo.jpg" alt="" className="img-fluid">
                        </Image>
                    </Col>
                    <Col className="col-6">
                        <h2 className="Login text-center">Registro</h2>
                        <Col className="text-center">
                            <h4>El registro ha finalizado exitosamente</h4>
                        </Col>
                        <Col className="text-center py-3">
                            <Button className="login-btn" onClick={NavPanLogin}>Volver a inicio</Button>
                        </Col>
                    </Col>
                </Col>
            </Row>
        </>

    )
}