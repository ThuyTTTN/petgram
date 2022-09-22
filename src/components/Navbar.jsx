import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SigupForm from "./SignupForm";
import Login from "./Login";

import Auth from '../utils/auth'

const Navbar = () => {
    //set modal display state
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container fluid>
                <Navbar.brand as={Link} to='/'>
                    PetGram Logo
                </Navbar.brand>
                <Navbar.Toggle aria-controls='navbar' />
                <Navbar.Collapse id='navbar'>
                    <Nav className='ml-auto'>
                        {/* if user is logged in, show dashboard */}
                            {Auth.loggedIn() ? (
                                <>
                                <Nav.Link as={Link} to='/dashboard'>Dashboard page</Nav.Link>
                                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                                </>
                            ) : (
                                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                              )} 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {/* set modal data */}
        <Modal size='lg' show={showModal} onHide={()}
        </>
        
    )

}

export default Navbar;