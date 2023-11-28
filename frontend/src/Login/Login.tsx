import React from 'react';
import './LoginCss.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MockUsuarios } from '../Ventas/Mocks/MockUsuarios';

function PanLogin() {
    const navigate = useNavigate();
    const NavRecCuenta = () => {
        navigate('/Recuperarcuenta')
    }
    const NavPanRegister = () => {
        navigate('/Register')
    }

    function handleIniciarSesion(){
        let usuario = MockUsuarios.find(usuario => usuario.Email === correo && usuario.Password === contraseña);

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
    const [contraseña, setContraseña] = useState("");
    return (
        <>
            <div id='background'>
                <div className='Container'>
                    <div className="header">
                        <div className="Text">Iniciar sesion</div>
                        <div className="Underline"></div>
                    </div>
                    <div className="Inputs">
                        <div className="Input">
                            <img src="" alt="" />
                            <input type="email" placeholder="Correo electronico" onChange={(e) => setCorreo(e.target.value) }/>
                        </div>
                        <div className="Input">
                            <img src="" alt="" />
                            <input type="password" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value) }/>
                        </div>
                    </div>
                    <div className="olvideContraseña" onClick={NavRecCuenta}>Olvidé mi contraseña</div>
                    <div className="submit-container">
                        <div className="submit" onClick={NavPanRegister}>Registrarse</div>
                    </div>

                    <div className="submit-container">
                        <div className="submitRedirigir" onClick={handleIniciarSesion}>Iniciar sesion</div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default PanLogin;