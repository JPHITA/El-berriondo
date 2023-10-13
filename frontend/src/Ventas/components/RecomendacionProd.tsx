import { Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { RandomProducto, GetProducto } from "./../Utils.ts";

interface RecomendacionProdProps {
    height: number;
    idProducto?: number;
}

// Componente que muestra una recomendacion de producto

export const RecomendacionProd = (props: RecomendacionProdProps) => {

    const navigate = useNavigate();

    const [producto, setProducto] = useState(props.idProducto? GetProducto(props.idProducto) : RandomProducto());
    
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
                    navigate(`/Ventas/Detalle/${producto.id}`);
                    setProducto(RandomProducto());
                }}
        >

            <Row style={{ height: "70%" }}>
                <Image src={producto.urlimg} fluid style={{ height: "100%" }}/>
            </Row>

            <Row style={{ height: "30%", textAlign: "center"}}>
                <h4 className="text-truncate">{producto.nombre}</h4>
            </Row>

        </div>
    )
}