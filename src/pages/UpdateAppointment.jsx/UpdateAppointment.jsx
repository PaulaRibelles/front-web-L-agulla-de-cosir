import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../common/InputText/InputText';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { appointmentUpdate } from '../../services/apiCalls';
import { detailData } from '../Slices/detailSlice';

export const UpdateAppointment = () => {

    const navigate = useNavigate();
    const appointmentRdx = useSelector(userData);
    const newAppo = useSelector(detailData)
    const paramsId = newAppo.choosenObject.id
    const token = appointmentRdx.credentials.token.token
    const checkError =(e) =>{ e };

    //HOOKS

    const [updateAct, setUpdateAct] = useState(false);

    const [welcome, setWelcome] = useState("");

    const [updateAppointment, setUpdateAppointment] = useState({
        dressmaker_id: "",
        date: "",
    });

    const [updateAppointmentError, setUpdateAppointmentError] = useState({
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

        //INPUT HANDLER

        const inputHandler = (e) => {
            setUpdateAppointment((preveState => ({
                ...preveState, 
                [e.target.name]: e.target.value,})
                ));
        };

        //UPDATE APPOINTMENT FUCTION

        const updateAppo = () => {
            appointmentUpdate(paramsId, updateAppointment, token )
            .then((reply)=>{
                setUpdateAppointment(reply?.data)
                setWelcome("Los cambios se han registrado correctamente");
                setTimeout(() => {
                    navigate("/getClient");
            },3000)
        })
            .catch(error => {console.log(error);
            })
        }
        
        //RENDER

    return (
    <Container fluid>
        <Row>
            <Col>
            <div>
                <h2>Modifica la cita</h2>
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
                <select 
                className="dropdown input-D" 
                name={"dressmaker_id"} 
                onChange={(e) => inputHandler(e) }
                >
                    <option value="">Selecciona tu tipo de traje</option>
                        {dressmakers.map((dressmaker) => {
                            return (
                                <option key={dressmaker.id} value={dressmaker.id}>{dressmaker.speciality}</option>
                            )
                            })}
                </select>
            </div>
            <div className='buttonAct' onClick={() => updateAppo()}>Guardar</div>
            
            </Col>
        </Row>
    </Container>
    )
}
