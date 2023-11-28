import './RecuperacionCss.css'
import {useNavigate} from "react-router-dom";
export default function FinRegistro(){
    const navigate =useNavigate();
    const NavPanLogin=() =>{
        navigate('/Login')
    }

    return(
        <>
            <div id="Background">
            <div className='Container'>
                <div className="header">
                    <div className="Text">Registro completo</div>
                    <div className="Underline"></div>
                </div>
                <h2> Te has registrado exitosamente</h2>
                <div className="submit-container">
                    <div className="submit" onClick={NavPanLogin}>volver a inicio</div>
                </div>
            </div>
            </div>
        </>

    )
}