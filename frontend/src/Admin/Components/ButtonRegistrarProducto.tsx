import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import Select from 'react-select';

import { Producto, Categoria } from '../../types';

import { useState } from 'react';
import { fetchBackend } from '../../services/backend';

interface ButtonRegistrarProductoProps {
  categorias: Categoria[];
  updateProductos?: () => void;
}

export const ButtonRegistrarProducto = (props: ButtonRegistrarProductoProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    setProductoCrear(undefined)
  };
  const handleShow = () => setShow(true);

  const [productoCrear, setProductoCrear] = useState<Producto>();

  function handleSetProductoCrear(e: React.ChangeEvent<HTMLInputElement>) {
    setProductoCrear({ ...productoCrear, [e.target.name]: e.target.name === "activo"? e.target.checked : e.target.value } as Producto);
  }

  function registrarProductoNuevo() {
    const categorias = productoCrear?.categorias;

    const producto = {...productoCrear}
    delete producto?.categorias;

    fetchBackend("/Admin/saveProducto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ producto, categorias })
    }).then(async (data) => {
      console.log(await data.json());
      handleClose();
      props.updateProductos?.();
    }).catch(async (err) => {
      console.log(await err.json());  
    })
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
                type="text"
                name="nombre"
                placeholder="Escriba el nombre del nuevo producto"
                autoFocus
                onChange={handleSetProductoCrear}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    type="number"
                    name="precio"
                    placeholder="Escriba el precio del nuevo producto"
                    autoFocus
                    onChange={handleSetProductoCrear}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    name="stock"
                    placeholder="Escriba la cantidad de unidades del nuevo producto"
                    autoFocus
                    onChange={handleSetProductoCrear}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción larga</Form.Label>
              <Form.Control
                as="textarea"
                name="descripcion_larga"
                rows={3}
                placeholder="Escriba una descripción del producto"
                autoFocus
                onChange={handleSetProductoCrear}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción corta</Form.Label>
              <Form.Control
                as="textarea"
                name="descripcion_corta"
                rows={1}
                placeholder="Escriba una descripción corta del producto"
                autoFocus
                onChange={handleSetProductoCrear}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>URL de Imagen</Form.Label>
              <Form.Control
                type="url"
                name="urlimg"
                placeholder="Adjunte URL de la imagen del nuevo producto"
                autoFocus
                onChange={handleSetProductoCrear}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Categorías</Form.Label>
              <Select
                isMulti
                name="categorias"
                options={props.categorias.map((cat: Categoria) => ({ value: cat.id, label: cat.nombre }))}
                onChange={(e) => {
                  setProductoCrear({ ...productoCrear, categorias: e.map((cat) => cat.value)} as Producto)
                }}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Check
                type="switch"
                name='activo'
                label="Activo"
                defaultChecked={true}
                autoFocus
                onChange={handleSetProductoCrear}
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

