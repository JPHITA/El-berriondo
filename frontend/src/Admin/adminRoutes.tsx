import { RouteObject } from "react-router-dom";
import { ListadoProductosPage } from "./Pages/listadoProductosPage.tsx";


export const routes: RouteObject[] = [
    {
        path: '/listadoProductos',
        element: <ListadoProductosPage/>
    },
    {
        path: '/registroProductos',
        element: <h1>Registro de productos</h1>
    },
    {
        path: '/reporteVentas',
        element: <h1>Reporte de ventas</h1>
    }
]