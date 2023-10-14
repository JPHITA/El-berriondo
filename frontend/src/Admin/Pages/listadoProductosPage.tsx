import {Container, Row, Col, Table }from 'react-bootstrap';
import { MockProductos } from '../Mocks/registroProductos';
import { ButtonModificarProducto } from '../Components/ButtonModificarProducto.tsx';
import { ButtonRegistrarProducto } from '../Components/ButtonRegistrarProducto.tsx';
import { Header } from '../Components/HeaderAdmin.tsx';

export const ListadoProductosPage = () => {

    return (
        <>
        <Header/>
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
        </>
  );
};

