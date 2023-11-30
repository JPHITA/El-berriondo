import './LoginCss.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import {fetchBackend} from "../services/backend.ts";

function PanRegister() {
    const navigate = useNavigate();
    const NavRegistro = () => {
        navigate('/Finregistro')
    }
    const NavPanLogin=()=>{
        navigate('/Login')
    }
    function handleRegister(){
        if (contraseña===contrasena_confirm) {

            fetchBackend("/Login/handleRegister", {
                method: "get",
                headers: {
                    "content-type": "application.json"
                },
                body: JSON.stringify({
                    "nombre": nombre,
                    "apellido": apellido,
                    "id": documento,
                    "email": correo,
                    "direccion": direccion,
                    "password": contraseña
                })
            }).then(async (res) => {
                const Response = await res.text()
                console.log(Response)

                if (Response) {
                    NavRegistro
                } else {
                    alert("el usuario ya existe")
                }
            })
        }else{
            alert("las contraseñas no coinciden")
        }
    }

    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const [documento,setDocumento]=useState("");
    const [correo, setCorreo] = useState("");
    const [direccion,setDireccion]=useState("");
    const [contraseña, setPassword] = useState("");
    const [contrasena_confirm,setConfirmPassword]=useState("");
    return (
        <>
            <Row className="Background g-0 vh-100 justify-content-center align-items-center login-container">

                <Col className="col-10 row g-0 align-items-center border rounded bg-white">

                    <Col className="col-6">

                        <Image src="https://raw.githubusercontent.com/JPHITA/El-berriondo/David/frontend/src/assets/Backgroungberriondo.jpg" alt="" className="img-fluid">
                        </Image>

                    </Col>
                    <Col className="col-6">
                        <h4 className="Login text-center">Registrate</h4>
                        <Form className="form-floating mb-1">
                            <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" onChange={(e)=> setNombre(e.target.value)}/>
                            <label htmlFor="nombre">Nombre</label>
                        </Form>
                        <Form className="form-floating mb-1">
                            <input type="text" className="form-control" id="apellido" placeholder="Tu apellido" onChange={(e)=> setApellido(e.target.value)}/>
                            <label htmlFor="apellido">Apellido</label>
                        </Form>
                        <Form className="form-floating mb-1">
                            <input type="text" className="form-control" id="documento" placeholder="Tu numero de documento" onChange={(e)=> setDocumento(e.target.value)}/>
                            <label htmlFor="documento">Documento</label>
                        </Form>
                        <Form className="form-floating mb-1">
                            <input type="email" className="form-control" id="email" placeholder="Correo electronico" onChange={(e)=> setCorreo(e.target.value)}/>
                            <label htmlFor="email">Correo Electronico</label>
                        </Form>
                        <Form className="form-floating mb-1">
                            <input type="text" className="form-control" id="direccion" placeholder="Tu direccion" onChange={(e)=> setDireccion(e.target.value)}/>
                            <label htmlFor="direccion">Dirección</label>
                        </Form>
                        <Form className="form-floating mb-1">
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                            <label htmlFor="password">Contraseña</label>
                        </Form>
                        <Form className="form-floating mb-3">
                            <input type="password" className="form-control" id="confirmpassword" placeholder="Confirma contraseña" onChange={(e)=> setConfirmPassword(e.target.value)}/>
                            <label htmlFor="confirmpassword">Confirmar contraseña</label>
                        </Form>
                        <Col className="text-center">
                            <h6>Ya tienes cuenta?</h6>
                        </Col>
                        <Col className="text-center">
                            <Button className="register-btn" onClick={NavPanLogin}> Iniciar sesion</Button>
                        </Col>
                        <Col className="text-center py-3">
                            <Button className="login-btn" onClick={handleRegister}>Registrate</Button>
                        </Col>
                    </Col>
                </Col>
            </Row>
        </>

    )
}

export default PanRegister;