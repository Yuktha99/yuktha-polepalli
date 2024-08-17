import React from "react";

import "./navigation.css";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Navbar
        expand="lg"
        className="navigation-bar"
        data-bs-theme="dark"
        sticky="top"
        fixed="top"
      >
        <Container>
          <Navbar.Brand className="navbar-brand-text" href="#home">
            Yuktha Polepalli
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#skills">Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#experience">Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#education">Education</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
