  
import React from "react";
import CartIcon from "../CardIcon/CardIcon";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import './styles.css';
import CartWidget from "../CartWidget/CartWidget";
import { useCartContext } from '../../context/CartContext';

const Navbarr = () => {
  const { cartQuantity } = useCartContext();
  
  return (
    <>
      <Navbar>
        <Navbar.Brand href={`/`} className="icon">
          <CartIcon />
        </Navbar.Brand>
        <Nav className="mr-auto navbar">
          <Nav.Link href={`/home`}>Home </Nav.Link>
          <Nav.Link href={`/nosotros`}>Nosotros</Nav.Link>
          <NavDropdown title="Tienda" id="collasible-nav-dropdown">
          <NavDropdown.Item href={`/productos/categorias`}>Alacena</NavDropdown.Item>
          <NavDropdown.Item href={`/productos/categorias`}> Productos a Granel</NavDropdown.Item>
          <NavDropdown.Item href={`/productos/categorias`}>Frescos y Congelados</NavDropdown.Item>
          <NavDropdown.Item href={`/productos/categorias`}>Bebidas e Infusiones</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href={`/productos`}>Ver Todo</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href={`/contacto`}>Contacto</Nav.Link>
        </Nav>
        <div>
          <CartWidget/>
          {cartQuantity > 0 &&
              <p className="cartQuantity">{cartQuantity}</p>
          }
        </div>
        <Form inline>
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar>
      
    </>
  );
};

export default Navbarr;