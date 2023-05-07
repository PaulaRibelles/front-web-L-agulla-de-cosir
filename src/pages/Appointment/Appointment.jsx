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

    const [ dressmakerDate, setDressmakerDate] = useState({
        dressmaker_id: "",
        date: "",
    });

    const [dressmakerDateError, setDressmakerDateError] = useState({
        dressmaker_idError: "",
        dateError: "",
    });

    const [dressmakers, setDressmakers] = useState([
        {
            id: 1,
            speciality: "Mujer S.XVIII"
        },
        {
            id: 2,
            speciality: "Mujer S.XIX"
        },
        {
            id:3,
            speciality: "Hombre Torrentí"
        },
        {
            id:4,
            speciality: "Hombre Saraguey"
        }
    ]);

    const navigate = useNavigate();
    const [newDate, setnewDate] = useState(new Date());
    const ReduxCredentials = useSelector(userData);
    const token = ReduxCredentials.credentials.token.token;
    let nameUser = ReduxCredentials.credentials.user.email;


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


    //NEW APPOINTMENT FUNCTION

    const newAppointment = () => {
        myAppointment(dressmakerDate, ReduxCredentials.credentials.token.token)
        // .then(respuesta => {
        //     setDressmakerDate(respuesta.data)
            
            if(nameUser){
                setWelcome(`Gracias ${nameUser} por confiar en nosotros`);
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            }
            else{
                setWelcome(`Error: ${respuesta.data}`)
            }
        // })

        // .catch((error) => console.log(error)); 
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
                placeholder={"Seleccionar fecha"}
                required={true}
                changeFunction={(e)=>inputHandler(e)}
                blurFunction={(e)=> checkError(e)}
                />
            <div>
                <select className="dropdown input-D" name={"dressmaker_id"} onChange={(e) => inputHandler(e) }>
                    <option value="">Selecciona tu tipo de traje</option>
                        {dressmakers.map((dressmaker) => {
                            return (
                                <option key={dressmaker.id} value={dressmaker.id}>{dressmaker.speciality}</option>
                            )
                            })}
                </select>
            </div>
            <div>{dressmakerDateError.passwordError}</div>
            <div className='buttonAct' onClick={() => newAppointment()}>Pedir cita</div>
            <div>{welcome}</div>
            </Col>
        </Row>
    </Container>
    )
}
