import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../Header/header.css";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";

import Hero from "../Hero";

function Header() {
  return (
    <>
      <Navbar expand='lg' className='navbar-custom w-100'>
        <Container fluid>
          <Navbar.Brand href='/'>Narmin Gurbanli</Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel'>
                Portfolio
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='mobile-body'>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <NavLink to='/' className='nav-link'>
                  Home
                </NavLink>
                <NavLink to='/about' className='nav-link'>
                  About
                </NavLink>
                <NavLink to='/projects' className='nav-link'>
                  Project
                </NavLink>
                <NavLink to='/contact' className='nav-link'>
                  Contact
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
