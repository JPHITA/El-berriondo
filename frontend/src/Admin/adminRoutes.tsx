import { RouteObject } from "react-router-dom";
import { ListadoProductosPage } from "./Pages/listadoProductosPage.tsx";
import { ReporteVentasPage } from "./Pages/reporteVentasPage.tsx";

export const routes: RouteObject[] = [
    {
        path: '/listadoProductos',
        element: <ListadoProductosPage/>
    },
    {
        path: '/reporteVentas',
        element: <ReporteVentasPage/>
    }
]