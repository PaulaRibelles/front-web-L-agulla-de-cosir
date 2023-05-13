import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { getDress } from '../../services/apiCalls';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { addChoosen } from '../Slices/detailSlice';


export const AdminGetDressmaker = () => {

    //HOOKS

    const credentialsRdx = useSelector(userData);
    const [user, setUsers] = useState([])
    const [dressmakers, setDressmakers] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //USE EFFECT

    useEffect(() => {

    if(!user?.length){
        getDress(credentialsRdx.credentials.token.token)
        .then((respuesta) => {
            setUsers(respuesta.data)
        })
    }
    if (!credentialsRdx.credentials.token) {
    navigate("/");
    }
}, [user]);

    useEffect(() => {
    if (!dressmakers?.length) {
        getDress(credentialsRdx.credentials.token.token)
            .then((result) => {
                setDressmakers(result.data);
        })
            .catch((error) => console.log(error));
    }
}, [dressmakers]);

    //UPDATE FUNCTION 

    const updateDressmaker = (indumentaristas) => {
        dispatch(addChoosen({choosenObject:indumentaristas}))
    }

    //RENDER

return (
    <Container fluid>
        <Row>
        {dressmakers.length > 0 ? (
            <Col lg={5} className='flex-column align-items-center justify-content-center'>
                <h2>Indumentaristas de la tienda</h2>
                {user.map((indumentaristas) => {
                    return(
                        <Card key={dressmakers.id}>
                            <Card.Body>
                            <Card.Title>{indumentaristas.User.name} {indumentaristas.User.surname}</Card.Title>
                            <Card.Text>Tipo de traje: {indumentaristas.speciality} </Card.Text>
                            <Card.Text>imagen del traje: {indumentaristas.image_url} </Card.Text>
                            <Card.Text>User ID: {indumentaristas.user_id} </Card.Text>
                            <Nav.Link as={Link} to={'/updateDressmaker'} onClick={() => updateDressmaker(indumentaristas)} >Editar indumentarista</Nav.Link>
                    </Card.Body>
                    </Card>
                    )
                    })}
            </Col>
        ) : (
            <div>No hay ningun/a indumentarista registrada</div>
        )}
        </Row>
    </Container>
    )
}
