import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { userData } from '../Slices/userSlice';
import { Col, Container, Row } from 'react-bootstrap';
import { InputText } from '../../common/InputText/InputText';
import { getDress, myAppointment } from '../../services/apiCalls';

export const Appointment = () => {

    const navigate = useNavigate();
    const ReduxCredentials = useSelector(userData);
    const token = ReduxCredentials.credentials.token.token;
    let nameUser = ReduxCredentials.credentials.user.email;

    //HOOKS

    const [ dressmakerDate, setDressmakerDate] = useState({
        dressmaker_id: "",
        date: "",
    });

    const [dressmakerDateError, setDressmakerDateError] = useState({
        dressmaker_idError: "",
        dateError: "",
    });

    const [dressmakers, setDressmakers] = useState([]);
    const [user, setUsers] = useState([])
    const [welcome, setWelcome] = useState("");
    const checkError =(e) =>{}

    //INPUT HANDLER

    const inputHandler = (e) => {
        setDressmakerDate((preveState => ({
            ...preveState,
            [e.target.name]: e.target.value,
            })
        ));
    }

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

    //NEW APPOINTMENT FUNCTION

    const newAppointment = () => {
        myAppointment(dressmakerDate, token)

            if(nameUser){
                setWelcome(`Gracias ${nameUser} por confiar en nosotros`);
                setTimeout(() => {
                    navigate('/getClient')
                }, 2000);
            }
            else{
                setWelcome(`Error: ${respuesta.data}`)
            }

    };

    //RENDER

    return (
    <Container fluid>
        <Row className='rowDesign'>
            <Col>
            <div>
                <h2>Pide tu cita con nosotros</h2>
            </div>
            <InputText
                className={"inputDesign"}
                type={"datetime-local"}
                name={"date"}
                placeholder={"Seleccionar fecha"}
                required={true}
                changeFunction={(e)=>inputHandler(e)}
                blurFunction={(e)=> checkError(e)}
                />
            <div>
                
                <select 
                className="dropdown inputDesign" 
                name={"dressmaker_id"} 
                onChange={(e) => inputHandler(e) }
                >
                    <option value="">Selecciona tu tipo de traje</option>
                        {dressmakers.map((indumentaristas) => {
                            return (
                                <option key={indumentaristas.id} value={indumentaristas.id}>{indumentaristas.speciality}</option>
                            )
                            })}
                </select>
            </div>
            <div>{dressmakerDateError.passwordError}</div>
            <div className='buttonAct buttonD' onClick={() => newAppointment()}>Pedir cita</div>
            <div>{welcome}</div>
            </Col>
        </Row>
    </Container>
    )
}
