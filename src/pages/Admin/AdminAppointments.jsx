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
            allAppointments(reduxCredentials.credentials.token.token)
                .then((result) => {
                    setAppointments(result.data);
            })
                .catch((error) => console.log(error));
        }
    }, [appointments]);

    return (
    <Container>
        <Row className='rowDesign'>
            {appointments.length > 0 ? (
                <Col lg={6}>
                    <h2>Todas las citas existentes</h2>
                {appointments.map((citas) => {
                    return (
                        <Card className='cardDesign' key={citas.id}>
                            <Card.Body>
                            <Card.Title>Modista/o: {citas.Dressmaker.User.name} {citas.Dressmaker.User.surname}</Card.Title>
                            <Card.Text>Cliente: {citas.Client.User.name} {citas.Client.User.surname}</Card.Text>
                            <Card.Text>Tipo Traje: {citas.Dressmaker.speciality}</Card.Text>
                            <Card.Text>Fecha: {citas.date}</Card.Text>
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
