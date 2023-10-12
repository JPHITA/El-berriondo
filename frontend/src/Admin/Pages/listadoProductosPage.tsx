import Table from 'react-bootstrap/Table';
import {Container, Row, Col }from 'react-bootstrap';
import { MockProductos, Producto } from '../Mocks/registroProductos';
import { ButtonModificarProducto } from '../Components/ButtonModificarProducto';

export const ListadoProductosPage = () => {

    return (
        <Container fluid>
            <h1 style={{textAlign: "center"}}>Listado de Productos</h1>
            <Row>
                <Col style={{display:'flex', justifyContent:'left'}}>
                    <Table responsive bordered striped='columns' size="sm" variant='dark'>  
                    <thead>
                        <tr>
                        <th style={{textAlign: "center"}}>ID</th>
                        <th style={{textAlign: "center"}} >NOMBRE</th>
                        <th style={{textAlign: "center"}} >PRECIO</th>
                        <th style={{textAlign: "center"}} >STOCK</th>
                        <th style={{textAlign: "center"}} >ACCIÓN</th>
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
                            <td style={{textAlign: "center"}} ><ButtonModificarProducto/></td>
                        </tr>
                    )})}
                    </tbody>
                    </Table>
                    </Col>
                    <Col>Segunda</Col>
            </Row>
        </Container>
  );
};

