import { RouteObject } from "react-router-dom";

import { PrincipalPage } from "./Pages/PrincipalPage.tsx";
import { DetallePage } from './Pages/DetallePage.tsx';

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
            }
        ]
    }
]