import { RouteObject } from "react-router-dom";

import { PrincipalPage } from "./Pages/PrincipalPage.tsx";
import { DetallePage } from './Pages/DetallePage.tsx';
import { CarritoPage } from './Pages/CarritoPage.tsx';

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
    
]