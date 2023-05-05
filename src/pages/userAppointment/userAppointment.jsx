import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { bringAppointments } from '../../services/apiCalls';
import { Card, Col, Container, Row } from 'react-bootstrap';


export const userAppointment = () => {

    //HOOKS

    const [user, setUser] = useState([])

    const credentialsRdx = useSelector(userData);
    const navigate = useNavigate();

    //USE EFFECT

    useEffect(() => {
        if(!user?.name){
            bringAppointments(credentialsRdx.credentials.token.token)
            .then((respuesta) => {
                setUser(respuesta.data)
            })
        }
        if (!credentialsRdx.credentials.token) {
            navigate("/")
        }
    }, [user.name]);

    //RENDER    

    return (
        <Container>
            <Row>
                <Col>
                    {user.map((citas) => {
                        return (
                            <Card>
                                <Card.Body>
                                    <Card.Title>{citas.Dressmaker.speciality}</Card.Title>
                                        <Card.Text>{citas.Dressmaker.User.name} {citas.Dressmaker.User.surname} </Card.Text>                             
                                        <Card.Text>{citas.date} </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}
