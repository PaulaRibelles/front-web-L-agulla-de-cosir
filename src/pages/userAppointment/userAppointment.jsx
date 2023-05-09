import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { bringAppointments, deleteAppointments } from '../../services/apiCalls';
import { Card, Col, Container, Row } from 'react-bootstrap';
export const UserAppointment = () => {

    //HOOKS

    const credentialsRdx = useSelector(userData);
    // const appointmentRdx = useSelector()
    const [user, setUser] = useState([])
    const navigate = useNavigate();

    //USE EFFECT

    useEffect(() => {
        if(!user.length){
            bringAppointments(credentialsRdx.credentials.token.token)
            .then((respuesta) => {

            setUser(respuesta.data)
            }).catch((error) => console.log(error));
        }
        if(!credentialsRdx.credentials.token) {
            navigate("/")
        }
            
    }, [user]);


    //DELETE FUNCTION

    const deleteAppo = () => {
        deleteAppointments(credentialsRdx.credentials.token.token)
        .then(
            () => {
                console.log(citas.id)
                setTimeout(() => {
                    navigate("/getClient")
                },300);
            }
        )
        .catch(error => {console.log(error);
        })
    }


    //RENDER

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Citas pendientes: </h2>
                    {user.map((citas) => {
                        return (
                            <Card key={citas.id}>
                                <Card.Body>
                                    <Card.Title>Tipo de traje: {citas.Dressmaker.speciality}</Card.Title>
                                        <Card.Text>Indumentarista: {citas.Dressmaker.User.name} {citas.Dressmaker.User.surname} </Card.Text>
                                        <Card.Text>Fecha: {citas.date} </Card.Text>
                                        <div className='buttonAct' onClick={() => deleteAppo()}>Eliminar</div>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    
                </Col>
            </Row>
        </Container>
    )
}