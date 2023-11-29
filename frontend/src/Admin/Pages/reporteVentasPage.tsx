import { Container, Row, Col, Table, Dropdown, DropdownButton } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { MockVentas, Venta } from '../../Ventas/Mocks/registroVentas.ts';
import { Header } from '../Components/HeaderAdmin.tsx';
import { useState } from 'react';
import DataTable from 'react-data-table-component';

export const ReporteVentasPage = () => {

    function actualizarEstados(estadoFila: string) {

        let estados: string[] = []
        if (estadoFila == 'En proceso') {
            estados = ['Completada', 'Cancelada']
        } else if (estadoFila == 'Completada') {
            estados = ['En proceso', 'Cancelada']
        } else if (estadoFila == 'Cancelada') {
            estados = ['Completada', 'En proceso']
        } else {
            //error
        }
        return estados
        //alert(estados[0] + estados[1]);
    }

    const [Ventas, setVentas] = useState(MockVentas);

    const columns = [
        {
            name: 'ID',
            selector: (row: any) => row.id,
            sortable: true,
        },
        {
            name: 'ESTADO',
            cell: (row: any) => {
                return (
                    <DropdownButton
                        as={ButtonGroup}
                        key={row.id}
                        id={`dropdown-${row.id}`}
                        variant={"success"}
                        title={row.estado}
                    >
                        {actualizarEstados(row.estado).map(estado => (
                            <Dropdown.Item>{estado}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                )
            },
            selector: (row: any) => row.estado,
            sortable: false,
        },
        {
            name: 'USUARIO',
            selector: (row: any) => row.usuario,
            sortable: true,
        },
        {
            name: 'GANANCIA',
            selector: (row: any) => row.ganancia,
            sortable: true,
        },
        {
            name: 'FECHA',
            selector: (row: any) => row.fecha.toDateString(),
            sortable: true,
        }
    ];




    return (
        <>
            <Header />
            <Container fluid >
                <h1 style={{ textAlign: "center" }}>Registro de Ventas</h1>
                <Row>
                    <Col style={{ justifyContent: 'center' }}>

                    </Col>
                </Row>
                <DataTable
                    columns={columns}
                    data={Ventas}
                />
            </Container>
        </>
    );

    /*
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
                       */
};

