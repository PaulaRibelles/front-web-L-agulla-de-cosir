import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { bringAppointments, deleteAppointments} from '../../services/apiCalls';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { addChoosen } from '../Slices/detailSlice';

export const UserAppointment = () => {

    //HOOKS

    const credentialsRdx = useSelector(userData);
    const [user, setUser] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    useEffect(() => {
        if (!appointments?.length) {
            bringAppointments(credentialsRdx.credentials.token.token)
                .then((result) => {
                    setAppointments(result.data);
            })
                .catch((error) => console.log(error));
        }
    }, [appointments]);


    //UPDATE FUNCTION 

    const updateYourAppo = (citas) => {
        dispatch(addChoosen({choosenObject:citas}))
    }

    
    //DELETE FUNCTION

    const deleteAppo = (citas) => {
        deleteAppointments(citas.id, credentialsRdx.credentials.token.token)
        .then(
            () => {
                setTimeout(() => {
                    bringAppointments(credentialsRdx.credentials.token.token)
                    .then((respuesta) => {
                    setUser(respuesta.data)
                    }).catch((error) => console.log(error));
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
            {appointments.length > 0 ? (
                <Col>
                    <h2>Citas pendientes: </h2>
                    {user.map((citas) => {
                        return (
                            <Card key={citas.id}>
                                <Card.Body>
                                    <Card.Title>Tipo de traje: {citas.Dressmaker.speciality}</Card.Title>
                                        <Card.Text>Indumentarista: {citas.Dressmaker.User.name} {citas.Dressmaker.User.surname} </Card.Text>
                                        <Card.Text>Fecha: {citas.date} </Card.Text>
                                        <div className='buttonAct' onClick={() => deleteAppo(citas)}>Eliminar</div>
                                        <Nav.Link as={Link} to={'/update'} onClick={() => updateYourAppo(citas)} >Editar cita</Nav.Link>
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
    )
}