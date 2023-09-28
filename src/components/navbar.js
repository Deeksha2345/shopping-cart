import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Your Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
