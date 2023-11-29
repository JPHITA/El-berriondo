import { Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { Producto } from "../../types.ts";

import { fetchBackend } from "../../services/backend.ts";


interface RecomendacionProdProps {
    height: number;
    Prod?: Producto;
    excludeProds?: number[];
    categorias?: number[];
    nombre?: string;
    cant?: number;
}

// Componente que muestra una recomendacion de producto

export const RecomendacionProd = (props: RecomendacionProdProps) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [producto, setProducto] = useState<Producto | undefined>();

    useEffect(function () {
        const abortController = new AbortController();
        const signal = abortController.signal;

        if (props.Prod) {
            setProducto(props.Prod);
        } else {

            // si no se pasa un producto, se obtiene uno aleatorio
            fetchBackend("/Ventas/getRandomProducto", {
                method: "POST",
                signal: signal,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        "excludeProds": props.excludeProds || null,
                        "categorias": props.categorias || null,
                        "nombre": props.nombre || null,
                        "cant": props.cant || 1
                    }
                )

            }).then(async res => {
                const data: Producto[] = await res.json();
                
                if (data.length > 0) {
                    setProducto(data[0]);
                } else {
                    setProducto(undefined);
                }
            }).catch(err => {
                console.log(err);
            });

        }

        return () => {
            abortController.abort();
        }

    }, [location, props.Prod, props.excludeProds, props.categorias, props.nombre, props.cant]);

    return (
        <>
        {/* si hay producto lo muestra, si no, no muestra nada */}
            {producto ?
                <div
                    style={{
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
                        <Image src={producto?.urlimg || ""} fluid style={{ height: "100%" }} />
                    </Row>

                    <Row style={{ height: "30%", textAlign: "center" }}>
                        <h4 className="text-truncate">{producto?.nombre || ""}</h4>
                    </Row>

                </div>

                : // else

                <></>
            }
        </>
    )
}