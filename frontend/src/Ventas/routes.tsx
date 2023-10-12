import { RouteObject } from "react-router-dom";
import PanLogin from "../Login/Login.tsx";
import RecuperarCuenta from "../Login/RecuperacionCuenta.tsx";

export const routes: RouteObject[] = [
    {
        path: '/login',
        element: <PanLogin/>
    },
    {
        path: '/Recuperarcuenta',
        element: <RecuperarCuenta/>
    }
]