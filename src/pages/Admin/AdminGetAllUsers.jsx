import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { allUsers } from '../../services/apiCalls';

export const AdminGetAllUsers = () => {

    //HOOKS

    const credentialsRdx = useSelector(userData);
    const [users, setUsers] = useState([])
    const navigate = useNavigate();
    const token = credentialsRdx.credentials.token.token;

    //USE EFFECT

    useEffect(() => {

            if(!users?.length){
                allUsers(token)
                .then((respuesta) => {
                    setUsers(respuesta.data)
                })
            }
            if (!token) {
            navigate("/");
            }
        }, [users]);

    //RENDER

    return (
        <Container fluid>
            <Row>
            {users.length > 0 ? (
                <Col lg={6} className='flex-column align-items-center justify-content-center'>
                <h2>Todos los usuarios</h2>
                {users.map(() => {
                    return (    
                        <Card key={users.id}>
                            <Card.Body>
                                <Card.Title>{users.name} {users.surname}</Card.Title>
                                <Card.Text>{users.city}</Card.Text>
                                <Card.Text>{users.phone}</Card.Text>
                                <Card.Text>{users.email}</Card.Text>
                            </Card.Body>
                        </Card>
                        )
                    })}
                </Col>
            ) : (
                <div>No hay ningun usuario registrado</div>
            )}
            </Row>
        </Container>
    )
}
