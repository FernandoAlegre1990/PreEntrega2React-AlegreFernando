import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import '../../index.css';





const NavBarComponent = () => {
  return (
    <Navbar expand="lg" bg="#000" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="custom-brand">
          <img
            src={`assets/logo2.jpg`}
            alt="Brand logo"
            className="brand-image"
          />
          F.A Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"> 
            <Nav.Link to="/about-us" className="custom-links">About us</Nav.Link>
            <Nav.Link href="/" className="custom-links">Shop</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Electonics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jewelery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
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