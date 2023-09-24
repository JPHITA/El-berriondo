import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import img from "../../assets/Ventas/don berriondo.jpg";
export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>
        <Navbar.Brand href="/">
          <Image className='me-3' src={img} rounded/>
          El berriondo
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>

            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Mi Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mis Compras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cerrar Sesion
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}