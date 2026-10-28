import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, NavLink} from 'react-router-dom'

import { FaShoppingCart } from "react-icons/fa";


function NavBarMenu({ cartCount = 0}) {
  return (
    <Navbar expand="lg" className="bg-black" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="\images\wonder land cuisine.png" alt="Wonderland Logo" height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
           
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/menu">Local Dishes</NavDropdown.Item>
              
              
              <NavDropdown.Item as={Link} to="/menu">
                Foriegn Cusine
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/menu">
              Desserts
            </Nav.Link>
             <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
             <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
             <Nav.Link href="/cart">
              &#x1F6D2; Cart <span className='badge bg-danger'>({cartCount})</span>
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;

