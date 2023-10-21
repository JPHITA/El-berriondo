import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';

import { MockCategorias } from '../Mocks/Categorias.ts';

import "./../../assets/Ventas/css/FiltroCategorias.css";

interface FiltroCategoriasProps {
    handleFiltro: (idFiltro: number) => void;
}

export const FiltroCategorias = (props: FiltroCategoriasProps) => {
    const [filtro, setFiltro] = useState(-1);

    return (
        <Row className="mb-2">
            <Col className="show-on-md">

                <button
                    type="button"
                    className={filtro === -1 ? "me-2 btn btn-success" : "me-2 btn btn-outline-success"}
                    onClick={() => {
                        setFiltro(-1);
                        props.handleFiltro(-1);
                    }}
                >
                    Todas
                </button>

                {MockCategorias.map((categoria, i) => (
                    <button
                        key={i}
                        type="button"
                        className={filtro === categoria.id ? "me-2 btn btn-success" : "me-2 btn btn-outline-success"}
                        onClick={() => {
                            setFiltro(categoria.id);
                            props.handleFiltro(categoria.id);
                        }}
                    >
                        {categoria.nombre}
                    </button>
                ))}

            </Col>

            <Col className="show-on-sm">
                <div className="dropdown">
                    
                    <button style={ {width: "100%"} } className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filtros
                    </button>
                    
                    <ul className="dropdown-menu">
                        <li
                            className={filtro === -1 ? "dropdown-item activado" : "dropdown-item"}
                            onClick={() => {
                                setFiltro(-1);
                                props.handleFiltro(-1);
                            }}
                        >
                            <a className="dropdown-item">Todas</a>
                        </li>

                        {MockCategorias.map((categoria, i) => (
                            <li
                                key={i}
                                className={filtro === categoria.id ? "dropdown-item activado" : "dropdown-item"}
                                onClick={() => {
                                    setFiltro(categoria.id);
                                    props.handleFiltro(categoria.id);
                                }}
                            >
                                <a className="dropdown-item">{categoria.nombre}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Col>
        </Row>
    )
}
