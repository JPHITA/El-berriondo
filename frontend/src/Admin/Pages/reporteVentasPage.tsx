<<<<<<< Updated upstream
import {Container, Row, Col, Table, Dropdown }from 'react-bootstrap';
import { MockVentas,Venta } from '../Mocks/registroVentas.ts';
import React from 'react';
=======
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Header } from '../Components/HeaderAdmin.tsx';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { fetchBackend } from '../../services/backend.ts';

import { ExpandableRowVentas } from "./../Components/ExpandableRowVentas.tsx";

function actualizarEstados(estadoFila: string) {
    let estados: string[] = []
    if (estadoFila == 'En proceso') {
        estados = ['Completada', 'Cancelada']
    } else if (estadoFila == 'Completada') {
        estados = ['Cancelada']
    } else if (estadoFila == 'Cancelada') {
        estados = ['En proceso']
    } else {
        //error
    }
    return estados
}
>>>>>>> Stashed changes

export const ReporteVentasPage = () => {
    const [Ventas, setVentas] = useState([]);
    const [loading, setLoading] = useState(true);

<<<<<<< Updated upstream
function actualizarEstados(estadoFila:string) {
    
    let estados:string[] = []
    if (estadoFila == 'En proceso'){
        estados = ['Completada','Cancelada']
    }else if(estadoFila == 'Completada'){
        estados = ['En proceso','Cancelada']
    }else if(estadoFila == 'Cancelada'){
        estados = ['Completada','En proceso']
    }else{
        //error
    }
    return estados
    //alert(estados[0] + estados[1]);
  }
=======
    function getVentas() {
        fetchBackend("/Admin/getVentas", {
            method: "GET",
        }).then(async (response) => {
            const data = await response.json();

            setVentas(data);
            setLoading(false);
        });
    }

    useEffect(getVentas, []);

    function actualizarEstado(id: number, estado: string) {
        setLoading(true);

        fetchBackend("/Admin/updateStateVenta", {
            method: "POST",
            body: JSON.stringify({id, estado}),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(async (response) => {
            const res = await response.json();
            console.log(res);

            if (res.success) getVentas();
        });
    }

    const columns = [
        {
            name: 'ID',
            selector: (row: any) => row.id,
            sortable: true,
        },
        {
            name: 'ESTADO',
            cell: (row: any) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={row.id}
                        id={`dropdown-${row.id}`}
                        variant={"success"}
                        title={row.estado}
                    >
                        {actualizarEstados(row.estado).map((estado, i) => (
                            <Dropdown.Item key={i} onClick={() => actualizarEstado(row.id, estado)}>
                                {estado}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
            ),
            selector: (row: any) => row.estado,
            sortable: false,
        },
        {
            name: 'USUARIO',
            selector: (row: any) => row.nombre_usuario,
            sortable: true,
        },
        {
            name: 'GANANCIA',
            selector: (row: any) => row.valor_total.toLocaleString("es-ES", {style: "currency", currency: "COP"}),
            sortable: true,
        },
        {
            name: 'CANTIDAD PRODUCTOS',
            selector: (row: any) => row.cantidad_productos,
            sortable: true,
        },
        {
            name: 'FECHA',
            selector: (row: any) => row.fecha_registro,
            sortable: true,
        }
    ];
>>>>>>> Stashed changes

    return (
        <Container fluid > 
            <h1 style={{textAlign: "center"}}>Registro de Ventas</h1>
            <Row>
                <Col style={{justifyContent:'center'}}>
                    <Table responsive bordered striped='columns'  variant='light'>  
                        <thead>
                            <tr>
                            <th style={{textAlign: "center"}} > ID</th>
                            <th style={{textAlign: "center"}} >ESTADO</th>
                            <th style={{textAlign: "center"}} >USUARIO</th>
                            <th style={{textAlign: "center"}} >GANANCIA</th>
                            <th style={{textAlign: "center"}} >FECHA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MockVentas.map((item,index) => { 
                                let estados = actualizarEstados(item.estado)
                            return(
                                <tr key={index}>
                                    <td style={{textAlign: "center"}} >{item.id}</td>
                                    <td style={{textAlign: "center"}} >
                                    <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                        {item.estado}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {estados.map(estado => (
                                        <Dropdown.Item>{estado}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                    <td style={{textAlign: "center"}} >{item.usuario} </td>
                                    <td style={{textAlign: "center"}} >{item.ganancia.toString()} $</td>
                                    <td style={{textAlign: "center"}} >{item.fecha.toDateString()}</td>
                                </tr>
                                )
                            })} 
                        </tbody>
                    </Table>
                    </Col>
<<<<<<< Updated upstream
            </Row>


        </Container>
  );
};

=======
                </Row>
                <DataTable
                    columns={columns}
                    data={Ventas}
                    pagination
                    progressPending={loading}
                    expandableRows
                    expandableRowsComponent={ExpandableRowVentas}
                />
            </Container>
        </>
    );
}
>>>>>>> Stashed changes
