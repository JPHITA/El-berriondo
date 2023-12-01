import './LoginCss.css'
import {useNavigate} from "react-router-dom";
import {Button, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import {fetchBackend} from "../services/backend.ts";

function RecuperarCuenta(){
    const navigate=useNavigate()
    const NavNewContra=()=>{
        navigate('/Nuevacontraseña')
    }
    function handleRecCuenta(){
        if (correo==="" || documento===""){
            alert('por favor ingresa los datos')
        }else {


            fetchBackend('/Login/userQuery', {
                method: 'get',
                headers: {
                    'content-type': 'application.json'
                },
                body: JSON.stringify({
                    'email': correo,
                    'id': documento
                })
            }).then(async (res) => {
                const Response = await res.json()
                console.log(Response)

                if (Response.email === correo && Response.id === documento) {
                    NavNewContra
                } else {
                    alert('no existe una cuenta con estos datos')
                }
            })
        }
    }
    const [correo, setCorreo] = useState("");
    const [documento, setDocumento] = useState("");

    return(
        <>
            <Row className="Background g-0 vh-100 justify-content-center align-items-center login-container">

                <Col className="col-10 row g-0 align-items-center border rounded bg-white">

                    <Col className="col-6">

                        <Image src="https://raw.githubusercontent.com/JPHITA/El-berriondo/David/frontend/src/assets/Backgroungberriondo.jpg" alt="" className="img-fluid">
                        </Image>

                    </Col>
                    <Col className="col-6">
                        <h2 className="Login text-center">Recuperar cuenta</h2>
                        <Col className="text-center">
                            <h6>Introduce los siguentes datos personales, si hay una cuenta registrada con estos datos, te permitiremos cambiar la contraseña</h6>
                        </Col>
                        <Form className="form-floating mb-1">
                            <input type="text" className="form-control" id="documento" placeholder="Tu documento" onChange={(e)=> setDocumento(e.target.value)}/>
                            <label htmlFor="documento">Documento</label>
                        </Form>
                        <Form className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" placeholder="Tu correo" onChange={(e)=> setCorreo(e.target.value)}/>
                            <label htmlFor="email">Correo</label>
                        </Form>
                        <Col className="text-center py-3">
                            <Button className="login-btn" onClick={handleRecCuenta}>Validar</Button>
                        </Col>
                    </Col>
                </Col>
            </Row>
        </>

    )
}

export default RecuperarCuenta;