import { Container, Row, Col, Table, Dropdown } from 'react-bootstrap';
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
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'ESTADO',
            selector: row => 
                {let estados = actualizarEstados(row.estado)
                    return(
                <Dropdown>
                    <Dropdown.Toggle variant="success" id = {row.id} >
                        {row.estado}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {estados.map(estado => (
                            <Dropdown.Item>{estado}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                )},
            sortable: true,
        },
        {
            name: 'USUARIO',
            selector: row => row.usuario,
            sortable: true,
        },
        {
            name: 'GANANCIA',
            selector: row => row.ganancia,
            sortable: true,
        },
        {
            name: 'FECHA',
            selector: row => row.fecha.toDateString(),
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

