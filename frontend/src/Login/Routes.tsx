import {RouteObject, Navigate} from "react-router-dom";
import RecuperarCuenta from "./RecuperacionCuenta";
import NuevaContraseña from "./NuevaContraseña";
import FinRegistro from "./FinRegistro";
import PanLogin from "./Login";
import PanRegister from "./Register";

const NavPanLogin=()=>{
    return <Navigate to={{pathname:'/Login'}}/>
}
export const routes: RouteObject[] = [
    {
        path: '/Login',
        element: <PanLogin/>
    },
    {
        path:'/Recuperarcuenta',
        element : <RecuperarCuenta/>

    },
    {
        path : '/Nuevacontraseña',
        element: <NuevaContraseña/>
    },
    {
        path:'/Finregistro',
        element: <FinRegistro/>
    },
    {
        path:'/Register',
        element: <PanRegister/>
    },
    {
        path:'*',
        element: <NavPanLogin/>

    }
]