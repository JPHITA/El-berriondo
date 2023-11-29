import './RecuperacionCss.css'
import {useNavigate} from "react-router-dom";
function RecuperarCuenta(){
    const navigate=useNavigate()
    const NavNewContra=()=>{
        navigate('/Nuevacontraseña')
    }

    return(
        <>
        <div id="Background">

            <div id='containerRecuperacion' className='Container'>
                <div className="header">
                    <div className="Text">Recuperar Cuenta</div>
                    <div className="Underline"></div>
                </div>
                <h2 id='h2-recuperacion'>Introduce tus siguientes datos personales, si existe una cuenta con estos datos, te permitiremos cambiar la contraseña</h2>
                <div className="Inputs">
                    <div className="Input-recuperacion">
                        <img src="" alt=""/>
                        <input type="text" placeholder="Documento"/>
                    </div>
                    <div className="Input-recuperacion">
                        <img src="" alt=""/>
                        <input type="email" placeholder="Correo electronico"/>
                    </div>
                </div>
                <div className="submit-container">
                    <div className="submit" onClick={NavNewContra}> Validar</div>
                </div>
            </div>

        </div>
        </>

    )
}

export default RecuperarCuenta;