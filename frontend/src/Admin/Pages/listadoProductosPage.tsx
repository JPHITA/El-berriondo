<<<<<<< Updated upstream
import {Container, Row, Col, Table }from 'react-bootstrap';
import { MockProductos } from '../Mocks/registroProductos';
import { ButtonModificarProducto } from '../Components/ButtonModificarProducto.tsx';
import { ButtonRegistrarProducto } from '../Components/ButtonRegistrarProducto.tsx';

export const ListadoProductosPage = () => {

    return (
        <Container fluid > 
            <h1 style={{textAlign: "center"}}>Listado de Productos</h1>
            <Col style={{textAlign: "center"}}><ButtonModificarProducto/></Col>
            <p></p>
            <Col style={{textAlign: "center"}}><ButtonRegistrarProducto/></Col>
            <p></p>
            <Row>
                <Col style={{justifyContent:'center'}}>
                    <Table responsive bordered striped='columns'  variant='light'>  
                        <thead>
                            <tr>
                            <th style={{textAlign: "center"}} > ID</th>
                            <th style={{textAlign: "center"}} >NOMBRE</th>
                            <th style={{textAlign: "center"}} >PRECIO</th>
                            <th style={{textAlign: "center"}} >STOCK</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MockProductos.map((item,index) => { 
                            return(
                                <tr key={index}>
                                    <td style={{textAlign: "center"}} >{item.id}</td>
                                    <td style={{textAlign: "center"}} >{item.nombre}</td>
                                    <td style={{textAlign: "center"}} >{item.precio} $</td>
                                    <td style={{textAlign: "center"}} >{item.stock}</td>
                                </tr>
                                )
                            })} 
                        </tbody>
                    </Table>
                    </Col>
            </Row>


        </Container>
  );
};

=======
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Row, Col } from 'react-bootstrap';
import { ButtonModificarProducto } from '../Components/ButtonModificarProducto.tsx';
import { ButtonRegistrarProducto } from '../Components/ButtonRegistrarProducto.tsx';
import { FiltroCategorias } from "./../../Ventas/components/FiltroCategorias.tsx";
import { Header } from '../Components/HeaderAdmin.tsx';
import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';

import { fetchBackend } from '../../services/backend.ts';

import { Producto, Categoria } from '../../types.ts';

const columns = [
    {
        name: 'ID',
        selector: (row: any) => row.id,
        sortable: true,
    },
    {
        name: "FECHA REGISTRO",
        selector: (row: any) => row.fecha_registro,
        sortable: true,
    },
    {
        name: 'NOMBRE',
        selector: (row: any) => row.nombre,
        sortable: true,
    },
    {
        name: 'PRECIO',
        selector: (row: any) => row.precio,
        sortable: true,
    },
    {
        name: 'STOCK',
        selector: (row: any) => row.stock,
        sortable: true,
    },
    {
        name: 'CATEGORIAS',
        selector: (row: any) => row.categoriasname,
        sortable: true,
    },
    {
        name: "ACTIVO",
        selector: (row: any) => row.activo == true ? "SI" : "NO",
        sortable: true,
    }
];

export const ListadoProductosPage = () => {

    const [productos, setProductos] = useState<Producto[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([]);
    const [pending, setPending] = useState(true);

    function loadProductos() {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetchBackend("/Admin/getProductos", {
            method: "GET", 
            signal: signal,
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then( async res => {
            const data: Producto[] = await res.json();
            
            setProductos(data);
            setProductosFiltrados(data);
            setPending(false);
            
        }).catch( err => { console.log(err) });

        return () => abortController.abort();
    }

    function loadCategorias() {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetchBackend("/Admin/getCategorias", {
            method: "GET", 
            signal: signal,
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then( async res => { setCategorias(await res.json() as Categoria[]) })
        .catch( err => { console.log(err) });

        return () => abortController.abort();
    }

    useEffect(function(){
        const abortProductos = loadProductos();
        const abortCategorias = loadCategorias();

        return () => {
            abortProductos();
            abortCategorias();
        }
    }, []);

    function handleFiltro(idFiltroCat: number) {
        if (idFiltroCat === -1) {
            setProductosFiltrados(productos);
        } else {
            setProductosFiltrados(productos.filter((producto: Producto) => producto.categorias?.includes(idFiltroCat)));
        }
    }

    return (
        <>
            <Header />
            <Container fluid >
                <h1 style={{ textAlign: "center" }}>Listado de Productos</h1>
                <Col style={{ textAlign: "right" }}>
                    <FiltroCategorias handleFiltro={handleFiltro} />
                </Col>
                <Row>
                    <Col style={{ justifyContent: 'center' }}>
                        <DataTable
                            columns={columns}
                            data={productosFiltrados}
                            progressPending={pending}
                            pagination
                        />
                    </Col>
                </Row>
                <Col style={{ textAlign: "center" }}>
                <ButtonModificarProducto 
                productos={productos}
                categorias={categorias}
                updateProductos={loadProductos}
                />
                </Col>
                <p></p>
                <Col style={{ textAlign: "center" }}>
                    <ButtonRegistrarProducto
                    categorias={categorias}
                    updateProductos={loadProductos}
                    />
                </Col>
                <p></p>

            </Container>
        </>
    );
};
>>>>>>> Stashed changes
