import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

export default function Navtitle() {
  return (
    <Navbar
      collapseOnSelect
      expand="light" //add css var colours
      bg="dark"
      variant="dark"
      className="header-color"
    >
      <Container className="header">
        <Navbar.Brand href="/">Michael's Portfolio</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/cv" className="nav-padding">
              CV/Resume
            </Link>
            <Link to="/" className="nav-padding">
              About Me
            </Link>
            <Link to="/projects" className="nav-padding">
              Projects
            </Link>
            <Link to="/contact" className="nav-padding">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
