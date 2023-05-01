import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import iconAgulla from '../../img/L-agulla.png'

export const BarraNav = () => {
    return (

    <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand as={Link} to='/'>
            <img
                alt="iconAgulla"
                src={iconAgulla}
                width="30"
                height="40"
                className="d-inline-block align-top"
            />
                L'agulla de cosir</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                    <Nav.Link as={Link} to={'/register'}>Registro</Nav.Link>
                    <Nav.Link as={Link} to={'/profile'}>Profile</Nav.Link>
                    <Nav.Link as={Link} to={'/appointment'}>Pide tu cita</Nav.Link>
                    <Nav.Link as={Link} to={'/appointment-client'}>Ver tus citas</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}
