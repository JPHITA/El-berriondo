import {Container, Row, Col, Table}from 'react-bootstrap';
import { MockProductos } from '../../Ventas/Mocks/Productos.ts';
import { MockCategorias } from '../../Ventas/Mocks/Categorias.ts';
import { ButtonModificarProducto } from '../Components/ButtonModificarProducto.tsx';
import { ButtonRegistrarProducto } from '../Components/ButtonRegistrarProducto.tsx';
import { FiltroCategorias } from "../../Ventas/Components/FiltroCategorias.tsx";
import { Header } from '../Components/HeaderAdmin.tsx';
import DataTable from 'react-data-table-component';
import { useState } from 'react';

export const ListadoProductosPage = () => {

    const [Productos,setProductos]= useState(MockProductos);
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'NOMBRE',
            selector: row => row.nombre,
            sortable: true,
        },
        {
            name: 'PRECIO',
            selector: row => row.precio,
            sortable: true,
        },
        {
            name: 'STOCK',
            selector: row => row.stock,
            sortable: true,
        },
        {
            name: 'CATEGORIAS',
            selector: row => MockCategorias.find(cat => cat.id === row.categoria)?.nombre,
            sortable: true,
        }
    ];

    function handleFiltro(idFiltroCat: number) {
        if (idFiltroCat === -1) {
            setProductos(MockProductos);
        } else {
            setProductos(MockProductos.filter(producto => producto.categoria === idFiltroCat));
        }
    }


    return (
        <>
        <Header/>
        <Container fluid > 
            <h1 style={{textAlign: "center"}}>Listado de Productos</h1>
            <Col style={{textAlign: "right"}}>
            <FiltroCategorias handleFiltro={handleFiltro}/>
            </Col>
            <Row>
                <Col style={{justifyContent:'center'}}>                
                <DataTable
                    columns={columns}
                    data={Productos}
                />
                </Col>
            </Row>
            <Col style={{textAlign: "center"}}><ButtonModificarProducto/></Col>
            <p></p>
            <Col style={{textAlign: "center"}}><ButtonRegistrarProducto/></Col>
            <p></p>

        </Container>
        </>
/*
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
*/

  );
};

