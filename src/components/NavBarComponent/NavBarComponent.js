  
import React from "react";
import CartIcon from "../CardIcon/CardIcon";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import './styles.css';

const Navbarr = () => {
  return (
    <>
      <Navbar bg="ligth" variant="ligth">
        <Navbar.Brand href="#home" className="icon">
          <CartIcon />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="">Home </Nav.Link>
          <Nav.Link href="">Nosotros</Nav.Link>
          <Nav.Link href="">Franquicia</Nav.Link>
          <Nav.Link href="">Tienda</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Navbarr;