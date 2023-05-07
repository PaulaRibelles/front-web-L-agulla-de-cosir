import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { allAppointments } from '../../services/apiCalls';


export const AdminAppointments = () => {

    //HOOKS

    const [appointments, setAppointments] = useState([]);

    const reduxCredentials = useSelector(userData);

    //USE EFFECT

    useEffect(() => {
        if (!appointments?.length) {
            allAppointments(reduxCredentials.credentials.token)
                .then((result) => {
                    setAppointments(result.data);
            })
                .catch((error) => console.log(error));
        }
    }, [appointments]);

    return (
    <Container>
        <Row>
            {appointments.length > 0 ? (
                <Col>
                {appointments.map((citas) => {
                    return (
                        <Card key={citas.id}>
                            <Card.Body>
                            <Card.Title>{citas.Dressmaker.speciality}</Card.Title>
                            <Card.Text>Modista/o: {citas.Dressmaker.User.name} {citas.Dressmaker.User.surname}</Card.Text>
                            <Card.Text>Fecha: {citas.date}</Card.Text>
                            <Card.Text>Cliente: {citas.Client.User.name} {citas.Client.User.surname}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
                </Col>
            ) : (
                <div>No hay ninguna cita</div>
            )}
        </Row>
    </Container>
    );
}
