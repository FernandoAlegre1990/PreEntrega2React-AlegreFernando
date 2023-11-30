import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import '../../index.css';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';



const mensClothing = "men's clothing";
const womensClothing = "women's clothing";
const jewelery = "jewelery";
const electronics = "electronics";

const NavBarComponent = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleShowContactForm = () => {
    setShowContactForm(true);
  };

  return (
    <div>
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
              <Nav.Link href="/" className="custom-links">
                Shop
              </Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={`/category/${mensClothing}`}>Men's Clothes</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={`/category/${womensClothing}`}>Women's Clothes</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={`/category/${jewelery}`}>Jewelery</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={`/category/${electronics}`}>Electronics</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleShowContactForm}>
                  Contact
                </NavDropdown.Item>
              </NavDropdown>
              <div className="cart-container">
                <CartWidgetComponent />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showContactForm && (
        <div className="contact-form">
          <Container>
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
          </Container>
        </div>
      )}
    </div>
  );
};

export default NavBarComponent;
