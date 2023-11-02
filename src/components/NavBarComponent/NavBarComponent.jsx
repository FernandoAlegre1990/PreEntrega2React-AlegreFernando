import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';



const NavBarComponent = () => {
  return (
    <Navbar expand="lg" bg="#000" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="custom-brand">Salchimania Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home " className="custom-brand">About us</Nav.Link>
            <Nav.Link href="#link" className="custom-brand">Shop</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Accesorios
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Alimento</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
            <div className="cart-container">
                 <CartWidgetComponent />
           </div>
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;