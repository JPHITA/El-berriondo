import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { MockProductos, Producto } from '../Mocks/registroProductos';
import { ButtonModificarProducto } from '../Components/ButtonModificarProducto';

export const ListadoProductosPage = () => {

    return (
        <Container>
            <h1>Listado de productos</h1>
            <Table bordered striped='columns' variant='dark' size="sm">  
            <thead>
                <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>PRECIO</th>
                <th>STOCK</th>
                </tr>
            </thead>
            <tbody>
            {MockProductos.map((item,index) => { 
                return(
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.precio} $</td>
                    <td>{item.stock}</td>
                    <td><ButtonModificarProducto/></td>
                </tr>
            )})}
            </tbody>
            </Table>
        </Container>
  );
};

