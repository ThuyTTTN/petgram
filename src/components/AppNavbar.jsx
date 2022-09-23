import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css';


const AppNavbar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">PetGram</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signupform">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Navbar bg="dark"variant="light" expand="lg">
        <Container>
          <Navbar.Brand>Navbar Here</Navbar.Brand>
          <ul>
            <li>Home</li>
            <li>Login</li>
          </ul>
        </Container>
      </Navbar> */}
    </>
  );
};

export default AppNavbar;
