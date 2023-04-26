import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

export const BarraNav = () => {
    return (

    <Navbar bg="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand as={Link} to='/'>L'agulla de cosir</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                    <Nav.Link as={Link} to={'/register'}>Registro</Nav.Link>
                    <Nav.Link as={Link} to={'/profile'}>Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}
