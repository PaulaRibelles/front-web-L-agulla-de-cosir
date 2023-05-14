import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userData } from '../Slices/userSlice';
import { detailData } from '../Slices/detailSlice';
import { Col, Container, Row } from 'react-bootstrap';
import { InputText } from '../../common/InputText/InputText';
import { dressmakerUpdate } from '../../services/apiCalls';

export const AdminUpdateDressmaker = () => {

    const navigate = useNavigate();
    const appointmentRdx = useSelector(userData);
    const changeDressmaker = useSelector(detailData)
    const paramsId = changeDressmaker.choosenObject.id
    const token = appointmentRdx.credentials.token.token
    const checkError =(e) =>{ e };

    //HOOKS

    const [welcome, setWelcome] = useState("");

    const [updateDressmaker, setUpdateDressmaker] = useState({
        speciality: "",
        image_url: "",
        user_id: "",
    });

    //INPUT HANDLER

    const inputHandler = (e) => {
        setUpdateDressmaker((preveState => ({
            ...preveState, 
            [e.target.name]: e.target.value,})
            ));
        };

    //UPDATE APPOINTMENT FUCTION

    const updateDress = () => {
        dressmakerUpdate(paramsId, updateDressmaker, token )
            .then((reply)=>{
                setUpdateDressmaker(reply?.data)
                setWelcome("Los cambios se han registrado correctamente");
                setTimeout(() => {
                    navigate("/getDressmaker");
            },3000)
        })
            .catch(error => {console.log(error);
            })
        }


    //RENDER

    return (
        <Container fluid className='containerDesign'>
        <Row className='rowDesign'>
            <Col>
            <div>
                <h2 className='titolDesign'>Modifica la indumentarista</h2>
            </div>
            <div className='divDesign' >
                    <InputText
                        className={"inputDesign input-D"}
                        type={"text"}
                        name={"speciality"}
                        placeholder={"Speciality"}
                        required={true}
                        changeFunction={(e)=>inputHandler(e)}
                        blurFunction={(e)=> checkError(e)}
                    />
                    <InputText
                        className={"inputDesign input-D"}
                        type={"text"}
                        name={"image_url"}
                        placeholder={"image_url"}
                        required={false}
                        changeFunction={(e)=>inputHandler(e)}
                        blurFunction={(e)=> checkError(e)}
                    />
                    <InputText
                        className={"inputDesign input-D"}
                        type={"text"}
                        name={"user_id"}
                        placeholder={"user_id"}
                        required={true}
                        changeFunction={(e)=>inputHandler(e)}
                        blurFunction={(e)=> checkError(e)}
                    />
                    </div>
            <div className='buttonAct' onClick={() => updateDress()}>Guardar</div>
            <div>{welcome}</div>
            </Col>
        </Row>
    </Container>
    )
}
