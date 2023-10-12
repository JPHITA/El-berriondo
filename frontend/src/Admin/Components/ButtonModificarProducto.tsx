import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';

export const ButtonModificarProducto = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
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
                  placeholder="123456"
                  autoFocus
                />
              <p></p>
              <Form.Label><Button variant="secondary" size="sm" onClick={() => 
                alert('Se buscan los datos del producto con el ID ')
                }>
                Buscar
                </Button>{' '}
              </Form.Label>
              <p></p>
              <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="id"
                  placeholder="Sombrero paisa"
                  autoFocus
                />
              <p></p>
              <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="id"
                  placeholder="470708 $"
                  autoFocus
                />
              <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="id"
                  placeholder="6 "
                  autoFocus
                />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }