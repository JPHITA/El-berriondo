import './RecuperacionCss.css'
import {useNavigate} from "react-router-dom";
 export default function NuevaContraseña(){
    const navigate =useNavigate();
    const NavPanLogin=() =>{
        navigate('/Login')
    }

    return(
        <>
            <div className='Container'>
                <div className="header">
                    <div className="Text">Recuperar Cuenta</div>
                    <div className="Underline"></div>
                </div>
                <h2> Introduce una nueva contraseña</h2>
                <div className="Inputs">
                    <div className="Input">
                        <img src="" alt=""/>
                        <input type="password" placeholder="Contraseña"/>
                    </div>
                    <div className="Input">
                        <img src="" alt=""/>
                        <input type="password" placeholder="Confirmar Contraseña"/>
                    </div>
                </div>
                <div className="submit-container">
                    <div className="submit" onClick={NavPanLogin}> Guardar y volver a inicio</div>
                </div>
            </div>
        </>

    )
}