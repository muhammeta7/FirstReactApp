import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand href="#home">GitHub Profiles</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
