import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../Slices/userSlice';
import { createDressmaker } from '../../services/apiCalls';
import { Col, Container, Row } from 'react-bootstrap';
import { InputText } from '../../common/InputText/InputText';


export const AdminCreateDressmaker = () => {
    
    const navigate = useNavigate();
    const ReduxCredentials = useSelector(userData);
    const token = ReduxCredentials.credentials.token.token;
    const checkError =(e) =>{};

    let nameUser = ReduxCredentials.credentials.user.email;

    //HOOKS

    const [newDressmaker, setNewDressmaker] = useState({
        speciality:"",
        image_url:"",
        user_id:"",
    });

    const [welcome, setWelcome] = useState("");

    //INPUT HANDLER

        const inputHandler = (e) => {
            setNewDressmaker((preveState => ({
                ...preveState,
                [e.target.name]: e.target.value,
                })
            ));
        }

    //NEW DRESSMAKER FUNCTION

        const dressmakerNew = () => {
            createDressmaker(newDressmaker, token)
    
                if(nameUser){
                    setWelcome(`Se ha creado correctamente`);
                    setTimeout(() => {
                        navigate('/')
                    }, 2000);
                }
                else{
                    setWelcome(`Error: ${respuesta.data}`)
                }
        };

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div>
                        <h2>Crea nueva/o indumentarista</h2>
                    </div>
                    <InputText
                        className={"input-D"}
                        type={"text"}
                        name={"speciality"}
                        placeholder={"Speciality"}
                        required={true}
                        changeFunction={(e)=>inputHandler(e)}
                        blurFunction={(e)=> checkError(e)}
                    />
                    <InputText
                        className={"input-D"}
                        type={"text"}
                        name={"image_url"}
                        placeholder={"image_url"}
                        required={false}
                        changeFunction={(e)=>inputHandler(e)}
                        blurFunction={(e)=> checkError(e)}
                    />
                        <InputText
                        className={"input-D"}
                        type={"text"}
                        name={"user_id"}
                        placeholder={"user_id"}
                        required={true}
                        changeFunction={(e)=>inputHandler(e)}
                        blurFunction={(e)=> checkError(e)}
                    />
                    <div className='buttonAct' onClick={() => dressmakerNew()}>Crear</div>
                    <div>{welcome}</div>
                </Col>
            </Row>
        </Container>
    )
}
