import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userData } from '../Slices/userSlice';
import { myProfile } from '../../services/apiCalls';
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';


export const Profile = () => {

    //HOOKS

    const [user, setUsers] = useState({
    })

    const credentialsRdx = useSelector(userData);
    let navigate = useNavigate();

    //USE EFFECT

useEffect(() => {

    if(!user?.name){
        myProfile(credentialsRdx.credentials.token.token)
        .then((respuesta) => {
            setUsers(respuesta.data)
        })
    }
    if (!credentialsRdx.credentials.token) {
    navigate("/");
    }
}, []);

    //RENDER

return (
    <Container fluid>
    <Row>
        <Col lg={10} className='flex-column align-items-center justify-content-center'>
            <Card>
                <Card.Body>
                <Card.Title>{user.name} {user.surname}</Card.Title>
                <Card.Text>{user.city}</Card.Text>
                <Card.Text>{user.phone}</Card.Text>
                <Card.Text>{user.email}</Card.Text>
                <Nav.Link as={Link} to={'/UpdateProfile'}>Editar perfil</Nav.Link>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
)
};