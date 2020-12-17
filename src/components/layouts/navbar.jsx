import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            KM System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/post-a-problem">
                Post a Problem
              </Nav.Link>
              <Nav.Link as={Link} to="/problem-List">
                Answer a Problem
              </Nav.Link>
              <Nav.Link as={Link} to="/expert-list">
                Find an Expert
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Login/Register" id="logn-register-dropdown">
                <NavDropdown.Item as={Link} to="/login">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/register">
                  Register
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default withRouter(NavBar);
