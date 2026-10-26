import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'

import { FaShoppingCart } from "react-icons/fa";


function NavBarMenu({ cartCount = 0}) {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="\images\wonder land cuisine.png" alt="Wonderland Logo" height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
           
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/menu">Local Dishes</NavDropdown.Item>
              
              
              <NavDropdown.Item href="#action5">
                Foriegn Cusine
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
              Desserts
            </Nav.Link>
             <NavLink href="/Menu" className="nav-link">
              About
            </NavLink>
             <NavLink href="/Contact" className="nav-link">
              Contact
            </NavLink>
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

