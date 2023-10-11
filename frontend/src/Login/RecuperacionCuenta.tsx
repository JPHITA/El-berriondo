import './RecuperacionCss.css'
function RecuperarCuenta(){

    return(
        <>
            <div className='Container'>
                <div className="header">
                    <div className="Text">Recuperar Cuenta</div>
                    <div className="Underline"></div>
                </div>
                <h2> Introduce la direccion de correo electronico que usaste para registrarte, te enviaremos un codigo de recuperacion</h2>
                <div className="Inputs">
                    <div className="Input">
                        <img src="" alt=""/>
                        <input type="email" placeholder="Correo electronico"/>
                    </div>
                </div>
                <div className="submit-container">
                    <div className="submit"> Enviar codigo</div>
                </div>
            </div>
        </>

    )
}

export default RecuperarCuenta;