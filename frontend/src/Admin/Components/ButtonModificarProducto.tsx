/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useEffect, useRef, useState } from 'react';

import { Producto, Categoria } from '../../types';
import { Row, Col } from 'react-bootstrap';

import Select from 'react-select';
import { fetchBackend } from '../../services/backend';

interface ButtonModificarProductoProps {
  productos: Producto[];
  categorias: Categoria[];
  updateProductos?: () => void;
}

export const ButtonModificarProducto = (props: ButtonModificarProductoProps) => {

  const inputProductoBuscar = useRef<HTMLInputElement>(null);

  const [productoModificar, setProductoModificar] = useState<Producto | undefined>(undefined);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(function(){
    if (!show){
      setProductoModificar(undefined);
    }
  }, [show]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "activo") {
      setProductoModificar({ ...productoModificar, [e.target.name]: e.target.checked } as Producto);
    } else {
      setProductoModificar({ ...productoModificar, [e.target.name]: e.target.value } as Producto);
    }

  }

  function guardarCambios() {
    const categorias = productoModificar?.categorias;

    const producto = {...productoModificar}
    delete producto?.categorias;

    fetchBackend("/Admin/modifyProducto", {
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
    });
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
                type="number"
                placeholder="Ingrese el ID del producto a modificar"
                autoFocus
                ref={inputProductoBuscar}
              />
              <p></p>
              <Form.Label><Button variant="secondary" size="sm" onClick={() => {
                const prod = props.productos.find((prod: Producto) => prod.id === parseInt(inputProductoBuscar.current?.value || '-1'));
                setProductoModificar(prod);
              }}>
                Buscar
              </Button>{' '}
              </Form.Label>
              <p></p>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name='nombre'
                value={productoModificar?.nombre || ''}
                autoFocus
                onChange={handleChange}
              />
              <p></p>

              <Row>
                <Col>
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    type="number"
                    name='precio'
                    value={(productoModificar?.precio)?.toString()}
                    autoFocus
                    onChange={handleChange}
                  />
                </Col>

                <Col>
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    name='stock'
                    value={(productoModificar?.stock)?.toString()}
                    autoFocus
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <Form.Label>Descripción larga</Form.Label>
              <Form.Control
                as="textarea"
                name='descripcion_larga'
                rows={3}
                value={(productoModificar?.descripcion_larga)?.toString()}
                autoFocus
                onChange={handleChange}
              />
              <Form.Label>Descripción corta</Form.Label>
              <Form.Control
                as="textarea"
                name='descripcion_corta'
                rows={1}
                value={(productoModificar?.descripcion_larga)?.toString()}
                autoFocus
                onChange={handleChange}
              />

              <Form.Label>Categorías</Form.Label>
              <Select
                isMulti
                name="categorias"
                options={props.categorias.map((cat: Categoria) => ({ value: cat.id, label: cat.nombre }))}
                value={productoModificar?.categorias?.map((idCat: number) => {
                  return { value: idCat, label: props.categorias.find((cat: Categoria) => cat.id === idCat)?.nombre }
                })}
                onChange={(e) => {
                  setProductoModificar({ ...productoModificar, categorias: e.map((cat) => cat.value)} as Producto)
                }}
                className="basic-multi-select"
                classNamePrefix="select"
              />

              <Form.Check
                type="switch"
                name='activo'
                label="Activo"
                checked={productoModificar?.activo || false}
                autoFocus
                onChange={handleChange}
              />

            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={guardarCambios}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}