import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { Producto, MockProductos } from './../Mocks/registroProductos';

import { useState } from 'react';

export const ButtonModificarProducto = () => {

  const [idBuscar, setIdBuscar] = useState('');
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoPrecio, setNuevoPrecio] = useState('');
  const [nuevoStock, setNuevoStock] = useState('');
  const [nuevaDescLarga, setNuevaDescLarga] = useState('');
  const [nuevaDescCorta, setNuevaDescCorta] = useState('');
  const [productoBuscar, setProductoBuscar] = useState<Producto | null>(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function guardarCambios(){
    const productoEncontrado = MockProductos.find((producto) => producto.id === parseInt(idBuscar));
      if (productoEncontrado) { 
          if (nuevoNombre.trim() != '' && nuevoPrecio.trim() != '' && nuevoStock.trim() != '' 
          && nuevaDescLarga != '' && nuevaDescCorta != ''){ 
            alert('El nuevo nombre es ' + nuevoNombre + '\n' +
            'El nuevo precio es ' + nuevoPrecio + '\n' +
            'El nuevo stock es  ' + nuevoStock + '\n' +
            'La nueva descripcion larga es ' + nuevaDescLarga + '\n' +
            'La nueva descripcion corta es ' + nuevaDescCorta);
          }else{
            alert('Por favor llena todos los espacios');
          }
      } else {
        alert('No se encontró el producto');
      }
    setNuevoNombre('');
    setNuevoPrecio('');
    setNuevoStock('');
    setNuevaDescCorta('');
    setNuevaDescLarga('');
    setShow(false);
  }  
  

  function buscarProducto() {
    const productoEncontrado = MockProductos.find((producto) => producto.id === parseInt(idBuscar));

    if (productoEncontrado) {
      setProductoBuscar(productoEncontrado);
    } else {
      alert('No se encontró el producto');
    }
  }

    return (
<>
      <Button variant="primary" onClick={handleShow}>
        Modificar producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificación de producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID del producto</Form.Label>
                <Form.Control
                  type="id"
                  placeholder="Ingrese el ID del producto a modificar"
                  autoFocus
                  onChange={(e) => setIdBuscar(e.target.value)}
                />
              <p></p>
              <Form.Label><Button variant="secondary" size="sm" onClick={() => {
                buscarProducto()
                }}>
                Buscar
                </Button>{' '}
              </Form.Label>
              <p></p>
              <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="nombre"
                  placeholder={productoBuscar?.nombre || ''}
                  autoFocus
                  onChange={(e) =>setNuevoNombre(e.target.value)}  
                />
              <p></p>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                  type="precio"
                  placeholder={(productoBuscar?.precio)?.toString()}
                  autoFocus
                  onChange={(e) =>setNuevoPrecio(e.target.value)}    
                />
              <Form.Label>Stock</Form.Label>
              <Form.Control
                  type="stock"
                  placeholder={(productoBuscar?.stock)?.toString()}
                  autoFocus
                  onChange={(e) =>setNuevoStock(e.target.value)}  
                />
              <Form.Label>Descripción larga</Form.Label>
              <Form.Control 
                  type='descLarga'
                  as="textarea" 
                  rows={3} 
                  placeholder={(productoBuscar?.descripcion_larga)?.toString()} 
                  autoFocus
                  onChange={(e) => setNuevaDescLarga(e.target.value)}
              />
              <Form.Label>Descripción corta</Form.Label>
              <Form.Control 
                  type='descLarga'
                  as="textarea" 
                  rows={1} 
                  placeholder={(productoBuscar?.descripcion_larga)?.toString()} 
                  autoFocus
                  onChange={(e) => setNuevaDescCorta(e.target.value)}
              />    
                
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => {
                guardarCambios()
                }}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }