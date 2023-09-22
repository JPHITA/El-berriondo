import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <h1>Inicio</h1>
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