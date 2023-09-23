import { RouteObject } from "react-router-dom";

import { PrincipalPage } from "./PrincipalPage.tsx";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <PrincipalPage/>
    },
    {
        path: '/ventas',
        children: [
            {
                path: 'detalle',
                element: <h1>detalle de ventas</h1>
            }
        ]
    }
]