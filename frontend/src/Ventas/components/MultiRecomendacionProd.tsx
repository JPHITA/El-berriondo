import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { RecomendacionProd } from "./RecomendacionProd.tsx";

import { Producto } from "../../types.ts";

import { fetchBackend } from "../../services/backend.ts";


interface MultiRecomendacionProdProps {
    height: number;
    excludeIdProds?: number[];
}

// Componente que muestra 4 recomendaciones de productos

export const MultiRecomendacionProd = (props: MultiRecomendacionProdProps) => {
    const [recomendaciones, setRecomendaciones] = useState<Producto[]>([]);

    const location = useLocation();
    
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetchBackend("/Ventas/getRandomProducto", {
            method: "POST",
            signal: signal,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                excludeProds: props.excludeIdProds,
                cant: 4
            })
        }).then(async (res) => {
            if (res.ok) {

                const prods: Producto[] = await res.json();
                setRecomendaciones(prods);

            } else {
                throw new Error("Error al obtener recomendaciones");
            }
        }).catch((err) => {
            // console.log(err);
        });

        return () => {
            abortController.abort();
        }
    }, [location, props.excludeIdProds]);

    return (
        <>
            {recomendaciones.length > 0 ? (
                <>
                    <Row>
                        <Col md={6} sm={6} xs={6}>
                            <RecomendacionProd height={props.height} Prod={recomendaciones[0]} />
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                            <RecomendacionProd height={props.height} Prod={recomendaciones[1]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={6} xs={6}>
                            <RecomendacionProd height={props.height} Prod={recomendaciones[2]} />
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                            <RecomendacionProd height={props.height} Prod={recomendaciones[3]} />
                        </Col>
                    </Row>
                </>
            )
            : // else
            (
                <p>Cargando...</p>
            )}
        </>
    )

}