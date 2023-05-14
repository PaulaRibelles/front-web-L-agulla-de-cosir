import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { dressmakerDelete, getDress } from '../../services/apiCalls';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { addChoosen } from '../Slices/detailSlice';


export const AdminGetDressmaker = () => {

    //HOOKS

    const credentialsRdx = useSelector(userData);
    const [user, setUsers] = useState([])
    const [dressmakers, setDressmakers] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = credentialsRdx.credentials.token.token;

    //USE EFFECT

    useEffect(() => {

    if(!user?.length){
        getDress(token)
        .then((respuesta) => {
            setUsers(respuesta.data)
        })
    }
    if (!token) {
    navigate("/");
    }
}, [user]);

    useEffect(() => {
    if (!dressmakers?.length) {
        getDress(token)
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

    //DELETE FUNCTION

        const deleteDress = (indumentaristas) => {
            dressmakerDelete(indumentaristas.id, token)
            .then(
                () => {
                    setTimeout(() => {
                        getDress(token)
                        .then((respuesta) => {
                        setUsers(respuesta.data)
                        })
                        getDress(token)
                        .then((respuesta) => {
                        setDressmakers(respuesta.data)
                        }).catch((error) => console.log(error));
                    },3000);
                }
            )
            .catch(error => {console.log(error);
            })
        }

    //RENDER

return (
    <Container fluid>
        <Row className='rowDesign'>
        {dressmakers.length > 0 ? (
            <Col lg={5} className='flex-column align-items-center justify-content-center'>
                <h2>Indumentaristas de la tienda</h2>
                {user.map((indumentaristas) => {
                    return(
                        <Card className='cardDesign' key={indumentaristas.id}>
                            <Card.Body>
                            <Card.Img className='imagenDesign' variant="top" src={indumentaristas.image_url} />
                            <Card.Title>{indumentaristas.User.name} {indumentaristas.User.surname}</Card.Title>
                            <Card.Text>Tipo de traje: {indumentaristas.speciality} </Card.Text>
                            <Card.Text>User ID: {indumentaristas.user_id} </Card.Text>
                            <div className='buttonAct' onClick={() => deleteDress(indumentaristas)}>Eliminar</div>
                            <Nav.Link className='editar' as={Link} to={'/updateDressmaker'} onClick={() => updateDressmaker(indumentaristas)} >Editar indumentarista</Nav.Link>
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
