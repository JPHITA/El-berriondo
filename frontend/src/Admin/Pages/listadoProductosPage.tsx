import {Container, Row, Col, Table }from 'react-bootstrap';
import { MockProductos } from '../Mocks/registroProductos';
import { ButtonModificarProducto } from '../Components/ButtonModificarProducto.tsx';
import { ButtonRegistrarProducto } from '../Components/ButtonRegistrarProducto.tsx';


export const ListadoProductosPage = () => {

    return (
        <Container fluid>
            <h1 style={{textAlign: "center"}}>Listado de Productos</h1>
            <Col><ButtonModificarProducto/></Col>
            <p></p>
            <Col><ButtonRegistrarProducto/></Col>
            <p></p>
            <Row>
                <Col style={{display:'flex', justifyContent:'left'}}>
                    <Table responsive bordered striped='columns'  variant='dark'>  
                    <thead>
                        <tr>
                        <th style={{textAlign: "center"}}> ID</th>
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
  
                    )})} 
                    </tbody>
                    </Table>
                    </Col>
            </Row>


        </Container>
  );
};

