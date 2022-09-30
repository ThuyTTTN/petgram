import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const AppNavbar = () => {

 
  return ( 
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><i class="fa-solid fa-paw"></i>  PetGram</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signupform">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
};

export default AppNavbar;
