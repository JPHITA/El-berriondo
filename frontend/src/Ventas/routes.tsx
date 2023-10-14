import { RouteObject } from "react-router-dom";

import { PrincipalPage } from "./Pages/PrincipalPage.tsx";
import { DetallePage } from './Pages/DetallePage.tsx';
import { CarritoPage } from './Pages/CarritoPage.tsx';

export const routes: RouteObject[] = [
    // {
    //     path: '/Ventas',
    //     element: <PrincipalPage/>
    // },
    {
        path: '/Ventas',
        children: [
            {
                path: 'Principal',
                element: <PrincipalPage/>
            },
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