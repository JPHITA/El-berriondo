import {Container, Row, Col, Table, Dropdown }from 'react-bootstrap';
import { MockVentas,Venta } from '../Mocks/registroVentas.ts';
import React from 'react';

export const ReporteVentasPage = () => {

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
            </Row>


        </Container>
  );
};

