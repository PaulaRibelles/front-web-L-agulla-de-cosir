import React, {useState, useEffect} from 'react';
import { bringUsers } from '../../services/apiCalls';
import { useDispatch, useSelector } from "react-redux";
import { userData } from '../Slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { addChoosen } from '../Slices/detailSlice';
import { Col, Container, Row } from 'react-bootstrap';

export const Users = () => {
    const [users, setUsers] = useState([]);

    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(users.length === 0){
            bringUsers(ReduxCredentials.credentials?.token)
                .then(
                    result => {
                        setUsers(result.data.data)
                    }
                )
                .catch(error => console.log(error));
        }
    },[users])

    const selected = (persona) => {
        dispatch(addChoosen({ choosenObject: persona }))
        setTimeout(()=>{
            navigate("/detail");
        },500)
    }

    return (
        <Container fluid>
            <Row className='design'>
                <Col lg={6}>
        <div >
            {  users.length > 0 ? 
                (<div>{
                    users.map(persona => {
                        return (
                            <div 
                                onClick={()=>selected(persona)} 
                                key={persona._id}>{persona.name}
                            </div>
                            )}
                        )
                    }
                </div>
                ):(<div>Datos usuarios</div>)
            }
        </div>
                </Col>
            </Row>
        </Container>
    )
}