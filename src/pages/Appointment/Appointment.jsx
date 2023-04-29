import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { userData } from '../Slices/userSlice';
import { Col, Container, Row } from 'react-bootstrap';
import { InputText } from '../../common/InputText/InputText';
import { myAppointment } from '../../services/apiCalls';

export const Appointment = () => {

    //HOOKS

    const [credenciales, setCredenciales] = useState({
        dressmaker_id: "",
        date: "",
    });

    const [credencialesError, setCredencialesError] = useState({
        dressmaker_idError: "",
        dateError: "",
    });

    const navigate = useNavigate();
    const [newDate, setnewDate] = useState(new Date());
    const ReduxCredentials = useSelector(userData);
    const {token} = ReduxCredentials.credentials;

    const [welcome, setWelcome] = useState("");


    const checkError =(e) =>{}

    //INPUT HANDLER

    const inputHandler = (e) => {
        setCredenciales((preveState => ({
            ...preveState, 
            [e.target.name]: e.target.value,
            })
        ));
    };

    //USE EFFECT

    useEffect(() =>{
        console.log(credenciales);
    })

    //NEW APPOINTMENT FUNCTION

    const newAppointment = () => {
        myAppointment(credenciales, token)
        .then(respuesta => {
            let nameUser = ReduxCredentials.credentials.user.email;
            if(nameUser){
                setWelcome(`Gracias ${nameUser} por confiar en nosotros`);
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            }
            else{
                setWelcome(`Error: ${respuesta.data}`)
            }
        })

        .catch((error) => console.log(error)); 
    };

    

    //RENDER

    return (
    <Container>
        <Row>
            <Col>
            <div>
                <h2>Pide tu cita con nosotros</h2>
            </div>
            <InputText
                className={"input-D"}
                type={"datetime-local"}
                name={"date"}
                placeholder={""}
                required={true}
                changeFunction={(e)=>inputHandler(e)}
                blurFunction={(e)=> checkError(e)}
                />
            <div>
                <select className="input-D" name="dressmaker_id" onChange={(e) => inputHandler(e) }>
                    <option value="">Selecciona tu tipo de traje</option>
                        <option value="1">Mujer S.XVIII</option>
                        <option value="2">Mujer S.XIX</option>
                        <option value="3">Hombre torrentí</option>
                        <option value="4">Hombre Saraguey</option>
                </select>
            </div>
            <div>{credencialesError.passwordError}</div>
            <div className='buttonAct' onClick={() => newAppointment()}>Pedir cita</div>
            <div>{welcome}</div>
            </Col>
        </Row>
    </Container>
    )
}
