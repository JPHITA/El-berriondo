import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Producto, MockProductos } from './../Mocks/registroProductos';

import { useState } from 'react';

export const ButtonRegistrarProducto = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nombreProductoNuevo, setNombreProductoNuevo] = useState('');
  const [descLargaProductoNuevo, setDescLargaProductoNuevo] = useState('');
  const [descCortoProductoNuevo, setDescCortaProductoNuevo] = useState('');
  const [precioProductoNuevo, setPrecioProductoNuevo] = useState('');
  const [stockProductoNuevo, setStockProductoNuevo] = useState('');
  const [urlImgProductoNuevo, setUrlImgProductoNuevo] = useState('');


  function registrarProductoNuevo(){
    var siguienteId = MockProductos.length + 1
    alert('SE HA REGISTRADO NUEVO PRODUCTO'+ '\n' +
    'ID: ' + siguienteId  + '\n' +
    'NOMBRE: ' + nombreProductoNuevo + '\n' +
    'PRECIO: ' + precioProductoNuevo + '\n' +
    'STOCK: ' + stockProductoNuevo + '\n' +
    'DESC. LARGA: ' + descLargaProductoNuevo + '\n' +
    'DESC. CORTA: ' + descCortoProductoNuevo + '\n' +
    'URL IMAGEN: ' + urlImgProductoNuevo)

    const nuevoProducto: Producto =     {
      "id": siguienteId,
      "nombre": nombreProductoNuevo,
      "descripcion_larga": descLargaProductoNuevo,
      "descripcion_corta": descCortoProductoNuevo,
      "precio": parseInt(precioProductoNuevo),
      "stock": parseInt(stockProductoNuevo),
      "urlimg": urlImgProductoNuevo
  }
    MockProductos.push(nuevoProducto);
    setShow(false);
}  


    return (
<>
      <Button variant="primary" onClick={handleShow}>
        Registrar Producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro de Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="nombre"
                placeholder="Escriba el nombre del nuevo producto"
                autoFocus
                onChange={(e) => setNombreProductoNuevo(e.target.value)}
              />
            </Form.Group>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción larga</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Escriba una descripción del producto"
                autoFocus
                onChange={(e) => setDescLargaProductoNuevo(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción corta</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={1} 
                placeholder="Escriba una descripción corta del producto"
                autoFocus
                onChange={(e) => setDescCortaProductoNuevo(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="precio"
                placeholder="Escriba el precio del nuevo producto"
                autoFocus
                onChange={(e) => setPrecioProductoNuevo(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="precio"
                placeholder="Escriba la cantidad de unidades del nuevo producto"
                autoFocus
                onChange={(e) => setStockProductoNuevo(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>URL de Imagen</Form.Label>
              <Form.Control
                type="URL"
                placeholder="Adjunte URL de la imagen del nuevo producto"
                autoFocus
                onChange={(e) => setUrlImgProductoNuevo(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => {
                registrarProductoNuevo()
                }}>
            Agregar producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }

