import './LoginCss.css'
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Row, Col, Button} from 'react-bootstrap';

import { MockUsuarios } from '../Ventas/Mocks/MockUsuarios';
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

function PanLogin() {
    const navigate = useNavigate();
    const NavRecCuenta = () => {
        navigate('/Recuperarcuenta')
    }
    const NavPanRegister = () => {
        navigate('/Register')
    }

    function handleIniciarSesion(){
        let usuario = MockUsuarios.find(usuario => usuario.Email === correo && usuario.Password === Password);

        if(usuario === undefined){
            alert("Usuario o contraseña incorrectos");
            return;
        }

        sessionStorage.setItem("usuario", JSON.stringify(usuario));

        if(usuario.Privilege){
            navigate('/listadoProductos');
        }else{
            navigate('/Ventas/Principal');
        }

    }

    const [correo, setCorreo] = useState("");
    const [Password, setPassword] = useState("");
    return (
        <>
            <Row className="Background g-0 vh-100 justify-content-center align-items-center login-container">

            <Col className="col-10 row g-0 align-items-center border rounded bg-white">

            <Col className="col-6">

                <Image src="https://raw.githubusercontent.com/JPHITA/El-berriondo/David/frontend/src/assets/Backgroungberriondo.jpg" alt="" className="img-fluid">
                </Image>

            </Col>
                <Col className="col-6">
                    <h4 className="Login text-center">Iniciar sesión</h4>
                <Form className="form-floating mb-1">
                    <input type="email" className="form-control" id="email" placeholder="Correo electronico" onChange={(e)=> setCorreo(e.target.value)}/>
                    <label htmlFor="email">Correo Electronico</label>
                </Form>
                    <Form className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                        <label htmlFor="password">Contraseña</label>
                    </Form>
                    <Col className="text-center mb-3">
                        <h6 className="Forgetpassword" onClick={NavRecCuenta}>Olvidé mi contraseña</h6>
                    </Col>
                    <Col className="text-center">
                        <h6>No tienes cuenta?</h6>
                    </Col>
                    <Col className="text-center">
                        <Button className="register-btn" onClick={NavPanRegister}> Registrate</Button>
                    </Col>
                    <Col className="text-center py-3">
                        <Button className="login-btn" onClick={handleIniciarSesion}>Iniciar sesión</Button>
                    </Col>
                </Col>
            </Col>
            </Row>
        </>
    )
}

export default PanLogin;