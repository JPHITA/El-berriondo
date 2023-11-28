import { RouteObject } from "react-router-dom";

import RecuperarCuenta from "./RecuperacionCuenta";
import IntroducirCodigo from "./IntroducirCodigo";
import NuevaContraseña from "./NuevaContraseña";
import FinRegistro from "./FinRegistro";
import PanLogin from "./Login";
import PanRegister from "./Register";


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
        path:'/Introducircodigo',
        element: <IntroducirCodigo/>
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
    }
]