import React from 'react';
import './LoginCss.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PanRegister() {
    const navigate = useNavigate();
    const NavRegistro = () => {
        navigate('/Finregistro')
    }
    const NavPanLogin=()=>{
        navigate('/Login')
    }

    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const [documento,setDocumento]=useState("");
    const [correo, setCorreo] = useState("");
    const [direccion,setDireccion]=useState("");
    const [contraseña, setContraseña] = useState("");
    const [contrasena_confirm,setConfirmarContrasena]=useState("");
    return (
        <>
            <div id='background'>

                <div className='Container'>
                    <div className="header">
                        <div className="Text">Registrarse</div>
                        <div className="Underline"></div>
                    </div>
                    <div className="Inputs">
                        <div className="Input">
                            <img src="" alt="" />
                            <input type="text" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)} />
                        </div>

                        <div className="Input">
                            <img src="" alt="" />
                            <input type="text" placeholder="Apellido" onChange={(e)=>setApellido(e.target.value)} />
                        </div>

                        <div className="Input">
                            <img src="" alt="" />
                            <input type="text" placeholder="Documento" onChange={(e)=>setDocumento(e.target.value)}/>
                        </div>

                        <div className="Input">
                            <img src="" alt="" />
                            <input type="email" placeholder="Correo electronico" onChange={(e) => setCorreo(e.target.value) }/>
                        </div>
                        <div className="Input">
                            <img src="" alt="" />
                            <input type="text" placeholder="Direccion" onChange={(e)=>setDireccion(e.target.value)} />
                        </div>

                        <div className="Input">
                            <img src="" alt="" />
                            <input type="password" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value) }/>
                        </div>
                        <div className="Input">
                            <img src="" alt="" />
                            <input type="password" placeholder="Confirmar contraseña" onChange={(e)=>setConfirmarContrasena(e.target.value)} />
                        </div>

                    </div>
                    <div className="submit-container">
                        <div className="submit" onClick={NavPanLogin}>Iniciar sesion</div>
                    </div>

                    <div className="submit-container">
                        <div className="submitRedirigir" onClick={NavRegistro}>Registrarse</div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default PanRegister;