import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';

export const ButtonRegistrarProducto = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
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
                type="email"
                placeholder="Nombre del nuevo producto"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción larga</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Escriba una descripción del producto" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción corta</Form.Label>
              <Form.Control as="textarea" rows={1} placeholder="Escriba una descripción resumida del producto"/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Precio</Form.Label>
              <Form.Control as="textarea" rows={1} placeholder="Escriba el precio del producto en pesos"/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Stock</Form.Label>
              <Form.Control as="textarea" rows={1} placeholder="Escriba la cantidad de unidades disponible del producto" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>URL de Imagen</Form.Label>
              <Form.Control as="textarea" rows={1} placeholder="Adjunte el URl de la imagen asociada al producto"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Agregar producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }