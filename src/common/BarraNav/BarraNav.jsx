import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData, userout } from '../../pages/Slices/userSlice';

import iconAgulla from '../../img/L-agulla.png'

export const BarraNav = () => {

    const credencialesRdx = useSelector(userData)
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const logmeOut = () => {
        dispatch (userout({credentials : {}, token : ""}))
        return navigate ("/")
    }

    return (

    <Navbar expand="lg">
        <Container fluid>
            <Navbar.Brand as={Link} to='/'>
            <img
                alt="iconAgulla"
                src={iconAgulla}
                width="30"
                height="40"
                className="d-inline-block align-top"
            />
                L'agulla de cosir
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    {credencialesRdx?.credentials?.user?.roleId === 1 ? (
                    <>
                        <Nav.Link as={Link} to={'/profile'}>Profile</Nav.Link>
                        <Nav.Link as={Link} to={'/getAll'}>Todas las citas</Nav.Link>
                        <Nav.Link as={Link} to={'/allUsers'}>Todos los usuarios</Nav.Link>
                        <Nav.Link as={Link} to={'/createDressmaker'}>Crear indumentarista</Nav.Link>
                        <Nav.Link as={Link} to={'/getDressmaker'}>Ver indumentaristas</Nav.Link>
                        <Nav.Link as={Link} to={'/'} onClick={()=>logmeOut()}>Cerrar sesión</Nav.Link>
                    </>
                    ) : credencialesRdx?.credentials?.user?.roleId === 2 ? (
                        <>
                        <Nav.Link as={Link} to={'/woman'}>Mujer</Nav.Link>
                        <Nav.Link as={Link} to={'/man'}>Hombre</Nav.Link>
                        <Nav.Link as={Link} to={'/profile'}>Profile</Nav.Link>
                        <Nav.Link as={Link} to={'/appointment'}>Pide tu cita</Nav.Link>
                        <Nav.Link as={Link} to={'/getClient'}>Ver tus citas</Nav.Link>
                        <Nav.Link as={Link} to={'/'} onClick={()=>logmeOut()}>Cerrar sesión</Nav.Link>
                        </>
                    ) : (
                        <>
                        <Nav.Link as={Link} to={'/woman'}>Mujer</Nav.Link>
                        <Nav.Link as={Link} to={'/man'}>Hombre</Nav.Link>
                        <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                        <Nav.Link as={Link} to={'/register'}>Registro</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}
