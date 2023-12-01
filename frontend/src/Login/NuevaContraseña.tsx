import './LoginCss.css'
import {useNavigate} from "react-router-dom";
import {Button, Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import {fetchBackend} from "../services/backend.ts";

 export default function NuevaContraseña(){
    const navigate =useNavigate();
    const NavPanLogin=() =>{
        navigate('/Login')
    }
    function handleNewPassword(){
        if(contraseña==="" || contrasena_confirm===""){
            alert('por favor introduce los datos')
        }else {

            if (contraseña === contrasena_confirm) {
                fetchBackend('/Login/newPassword', {
                    method: 'get',
                    headers: {
                        "content-type": "application.json"
                    },
                    body: JSON.stringify({
                        "password": contraseña
                    })
                }).then(async (res) => {
                    const Response = await res.text()
                    console.log(Response)

                    if (Response) {
                        NavPanLogin
                    }
                })
            } else {
                alert('las contraseñas no coinciden')
            }
        }
    }
     const [contraseña, setPassword] = useState("");
     const [contrasena_confirm,setConfirmPassword]=useState("");

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
                            <h6>Introduce una nueva contraseña</h6>
                        </Col>
                        <Form className="form-floating mb-1">
                            <input type="password" className="form-control" id="password" placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)}/>
                            <label htmlFor="documento">Contraseña</label>
                        </Form>
                        <Form className="form-floating mb-3">
                            <input type="password" className="form-control" id="confirmpassword" placeholder="Confirmar contraseña" onChange={(e)=> setConfirmPassword(e.target.value)}/>
                            <label htmlFor="email">Confirmar contraseña</label>
                        </Form>
                        <Col className="text-center py-3">
                            <Button className="login-btn" onClick={handleNewPassword}>Guardar y volver a inicio</Button>
                        </Col>
                    </Col>
                </Col>
            </Row>
        </>
    )
}