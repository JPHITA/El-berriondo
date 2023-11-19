import { Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { Producto } from "../../types.ts";

import { fetchBackend } from "../../services/backend.ts";


interface RecomendacionProdProps {
    height: number;
    idProducto?: number;
    excludeIdProds?: number[];
}

// Componente que muestra una recomendacion de producto

export const RecomendacionProd = (props: RecomendacionProdProps) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [producto, setProducto] = useState<Producto>();

    useEffect(function() {
        const url = props.idProducto? `/Ventas/${props.idProducto}` : "/Ventas/getRandomProducto";
        const method = props.idProducto? "GET" : "POST";

        fetchBackend(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"excludeIdProds" : props.excludeIdProds || null })
        }).then(async res => {
            const data: Producto = await res.json();

            setProducto(data);
        });

    }, [location]);
    
    return (
        <div
            style={
                {
                    height: `${props.height}px`,
                    width: '100%',
                    border: '1px solid gray',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    navigate(`/Ventas/Detalle/${producto?.id || ""}`);
                }}
        >

            <Row style={{ height: "70%" }}>
                <Image src={producto?.urlimg || ""} fluid style={{ height: "100%" }}/>
            </Row>

            <Row style={{ height: "30%", textAlign: "center"}}>
                <h4 className="text-truncate">{producto?.nombre || ""}</h4>
            </Row>

        </div>
    )
}