import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Now We're Talking</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Link className="nav-item nav-link" to="/">Profile</Link>
                  <Link className="nav-item nav-link" to="/topics">Users</Link>
                  <Link className="nav-item nav-link" to="/profile">Debate</Link>
                  <Link className="nav-item nav-link" to="/challenge">Sign In</Link>

              </Nav>

          </Navbar.Collapse>
      </Navbar>
  )
}
  
  export default NavBar;
  