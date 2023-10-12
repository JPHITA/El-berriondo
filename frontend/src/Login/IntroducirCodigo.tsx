import './RecuperacionCss.css'
import {useNavigate} from "react-router-dom";
function IntroducirCodigo(){
    const navigate=useNavigate();
    const NavNewContra=()=>{
        navigate('/Nuevacontraseña')
    }

    return(
        <>
            <div className='Container'>
                <div className="header">
                    <div className="Text">Recuperar Cuenta</div>
                    <div className="Underline"></div>
                </div>
                <h2> Ingresa el codigo que te hemos enviado</h2>
                <div className="Inputs">
                    <div className="Input">
                        <img src="" alt=""/>
                        <input type="email" placeholder="Codigo"/>
                    </div>
                </div>
                <div className="submit-container">
                    <div className="submit" onClick={NavNewContra}> Comprobar</div>
                </div>
            </div>
        </>

    )
}

export default IntroducirCodigo;