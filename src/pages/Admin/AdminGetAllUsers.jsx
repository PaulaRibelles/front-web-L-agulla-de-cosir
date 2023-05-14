import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { allUsers, allUsersDelete } from '../../services/apiCalls';

export const AdminGetAllUsers = () => {

    //HOOKS

    const credentialsRdx = useSelector(userData);
    const [users, setUsers] = useState([])
    const navigate = useNavigate();
    const token = credentialsRdx.credentials.token.token;

    const [welcome, setWelcome] = useState("")

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

    //DELETE FUNCTION

        const deleteUser = (usersAll) => {
            allUsersDelete(usersAll.id, token)
            .then(
                () => {
                    setTimeout(() => {
                        allUsers(token)
                        .then((respuesta) => {
                        setUsers(respuesta.data)
                        })
                    },3000);
                }
            )
            .catch((error) => {
                setWelcome(`No se pueden borrar usuarios con citas`);
                setTimeout(() => {
                setWelcome(``);
                }, 3000);
            })
        };

    //RENDER

    return (
        <Container fluid>
            <Row>
            {users.length > 0 ? (
                <Col lg={6} className='flex-column align-items-center justify-content-center'>
                <h2>Todos los usuarios</h2>
                {users.map((getUsers) => {
                    return (    
                        <Card key={getUsers.id}>
                            <Card.Body>
                                <Card.Title>{getUsers.name} {getUsers.surname}</Card.Title>
                                <Card.Text>{getUsers.city}</Card.Text>
                                <Card.Text>{getUsers.phone}</Card.Text>
                                <Card.Text>{getUsers.email}</Card.Text>
                                <div className='buttonAct' onClick={() => deleteUser(getUsers)}>Eliminar</div>
                                <div>{welcome}</div>
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
