import './RecuperacionCss.css'
import {useNavigate} from "react-router-dom";
function RecuperarCuenta(){
    const navigate=useNavigate()
    const NavIntCod=()=>{
        navigate('/Introducircodigo')
    }

    return(
        <>
        <div id="Background">

            <div id='containerRecuperacion' className='Container'>
                <div className="header">
                    <div className="Text">Recuperar Cuenta</div>
                    <div className="Underline"></div>
                </div>
                <h2 id='h2-recuperacion'> Introduce la direccion de correo electronico que usaste para registrarte, te enviaremos un codigo de recuperacion</h2>
                <div className="Inputs">
                    <div className="Input-recuperacion">
                        <img src="" alt=""/>
                        <input type="email" placeholder="Correo electronico"/>
                    </div>
                </div>
                <div className="submit-container">
                    <div className="submit" onClick={NavIntCod}> Enviar codigo</div>
                </div>
            </div>

        </div>
        </>

    )
}

export default RecuperarCuenta;