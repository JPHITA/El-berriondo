import './LoginCss.css'
import {useState} from "react";
function PanLogin(){

    const [Action,setAction]=useState("Registrarse");
    return(
        <>
            <div className='Container'>
                <div className="header">
                    <div className="Text">{Action}</div>
                    <div className="Underline"></div>
                </div>
                <div className="Inputs">
                    {Action==="Iniciar sesion"?<div></div>:<div className="Input">
                        <img src="" alt=""/>
                        <input type="text" placeholder="Nombre"/>
                    </div>
                    }
                    {Action==="Iniciar sesion"?<div></div>:<div className="Input">
                        <img src="" alt=""/>
                        <input type="text" placeholder="Documento"/>
                    </div>
                    }
                    <div className="Input">
                        <img src="" alt=""/>
                        <input type="email" placeholder="Correo electronico"/>
                    </div>
                    {Action==="Iniciar sesion"?<div></div>:<div className="Input">
                        <img src="" alt=""/>
                        <input type="text" placeholder="Direccion"/>
                    </div>

                    }
                    <div className="Input">
                        <img src="" alt=""/>
                        <input type="password" placeholder="Contraseña"/>
                    </div>
                    {Action==="Iniciar sesion"?<div></div>:<div className="Input">
                        <img src="" alt=""/>
                        <input type="password" placeholder="Confirmar contraseña"/>
                    </div>
                    }
                </div>
                {Action==="Registrarse"?<div></div>:<div className="olvideContraseña"><span>Olvidé mi contraseña</span></div>
                }
                <div className="submit-container">
                    <div className={Action==="Iniciar sesion"?"submit gray":"submit"} onClick={()=>{setAction("Registrarse")}}>Registrarse</div>
                    <div className={Action==="Registrarse"?"submit gray":"submit"} onClick={()=>{setAction("Iniciar sesion")}}>Iniciar sesion</div>
                </div>
            </div>
        </>

    )
}

export default PanLogin;