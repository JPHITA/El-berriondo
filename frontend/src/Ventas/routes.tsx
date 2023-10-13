import { RouteObject } from "react-router-dom";

import { PrincipalPage } from "./Pages/PrincipalPage.tsx";
import { DetallePage } from './Pages/DetallePage.tsx';
import { CarritoPage } from './Pages/CarritoPage.tsx';
import PanLogin from "../Login/Login.tsx";
import RecuperarCuenta from "../Login/RecuperacionCuenta.tsx";
import IntroducirCodigo from "../Login/IntroducirCodigo.tsx";
import NuevaContraseña from "../Login/NuevaContraseña.tsx";
import FinRegistro from "../Login/FinRegistro.tsx";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <PrincipalPage/>
    },
    {
        path: '/Ventas',
        children: [
            {
                path: 'Detalle/:idProducto',
                element: <DetallePage/>
            },
            {
                path: 'Carrito',
                element: <CarritoPage/>
            }
        ]
    },
    {
        path: '/login',
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
    }
    
]