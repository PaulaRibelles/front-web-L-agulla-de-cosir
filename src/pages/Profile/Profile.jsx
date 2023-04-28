import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userData } from '../Slices/userSlice';
import { myProfile } from '../../services/apiCalls';
import { Card, Col, Container, Row } from 'react-bootstrap';


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
                <Card.Text>{user.phone}</Card.Text>
                <Card.Text>{user.email}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
)
};