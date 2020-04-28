import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand>GitHub Profiles</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Link to="/add/card" className="navLink">
            <Nav.Link href="#link">Add New Card</Nav.Link>
          </Link>
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
