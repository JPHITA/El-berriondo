import { RouteObject } from "react-router-dom";
import PanLogin from "../Login/Login.tsx";
import RecuperarCuenta from "../Login/RecuperacionCuenta.tsx";
import IntroducirCodigo from "../Login/IntroducirCodigo.tsx";
import NuevaContraseña from "../Login/NuevaContraseña.tsx";
import FinRegistro from "../Login/FinRegistro.tsx";

export const routes: RouteObject[] = [
    {
        path: '/login',
        element: <PanLogin/>
    },
    {
        path: '/Recuperarcuenta',
        element: <RecuperarCuenta/>
    },
    {
        path: '/Introducircodigo',
        element: <IntroducirCodigo/>
    },
    {
        path: '/Nuevacontraseña',
        element: <NuevaContraseña/>
    },
    {
        path: '/Finregistro',
        element: <FinRegistro/>
    }
]