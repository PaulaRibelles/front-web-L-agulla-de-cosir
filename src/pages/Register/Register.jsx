import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { InputText } from '../../common/InputText/InputText';
import { checkInputs } from '../../Helpers/useful';
import { registerMe } from '../../services/apiCalls';

import './Register.css'

export const Register = () => {
    const navigate = useNavigate();

    //HOOKS

        //Error Validation

        const [credenciales, setCredenciales] = useState({
            name: "",
            surname: "",
            dni: "",
            city: "",
            phone: "",
            email: "",
            password: "",
        });

        const [credencialesError, setCredencialesError] = useState({
            nameError: "",
            surnameError: "",
            dniError: "",
            cityError: "",
            phoneError: "",
            emailError: "",
            passwordError: "",
        });

        const [credencialesValid, setCredencialesValid] = useState({
            nameValid: false,
            surnameValid: false,
            dniValid: false,
            cityValid: false,
            phoneValid: false,
            emailValid: false,
            passwordValid: false
        });

        //Validation

        const [registerAct, setRegisterAct] = useState(false);

        const [welcome, setWelcome] = useState("");

    //INPUT HANDLER

    const inputHandler = (e) => {
        setCredenciales((preveState => ({
            ...preveState, 
            [e.target.name]: e.target.value,})
            ));
    };

    //USE EFFECT

    useEffect(()=>{
        for(let error in credencialesError){
            if(credencialesError[error] !== ""){
                setRegisterAct(false);
            return;
            }
        }

        for(let vacio in credenciales){
            if(credenciales[vacio] === ""){
                setRegisterAct(false);
            return;
            }
        }

        for(let validated in credencialesValid){
            if(credencialesValid[validated] === false){
                setRegisterAct(false);
            return;
            }
        }
        setRegisterAct(true);
    });

    //ERROR CHECKING FUNCTION

    const inputValidate = (e) => {
        let error = "";
        let checked = checkInputs(
            e.target.name,
            e.target.value,
            e.target.required
        );
        error = checked.message; 

        setCredencialesValid((prevState) => ({
            ...prevState,
            [e.target.name + "Valid"]: checked.validated,
        }));

        setCredencialesError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
        }));
    };


    //REGISTER FUNCTION

    const Registro = () => {
        registerMe(credenciales)
        .then(respuesta => {
            let nameUser = respuesta.data.name
            if(nameUser){
                setWelcome(`Enhorabuena ${nameUser}, te has registrado correctamente`);
                setTimeout(() => {
                navigate("/login");
            }, 3000);
        }
        else{
            setWelcome(`Error: ${respuesta.data}`)
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    })
    
        .catch((error) => console.log(error));
    };


    //RENDER

    return (
    <Container fluid className='containerRegister'>
        <Row>
        <Col>

            {welcome !== ""? (
                <div>{welcome}</div>
            ) : (
                <div className='registerDesign'>

            <div>
                <h2>Registro de usuarios</h2>
            </div>

                {/* INPUT NAME */}

                <InputText
                    className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    maxLength={25}
                    name={"name"}
                    placeholder={"Escribe tu nombre"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />
                <div>{credencialesError.nameError}</div>

                {/* INPUT SURNAME */}

                <InputText
                    className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    maxLength={50}
                    name={"surname"}
                    placeholder={"Escribe tus apellidos"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />
                <div>{credencialesError.surnameError}</div>

                {/* INPUT DNI */}

                <InputText
                    className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    maxLength={9}
                    name={"dni"}
                    placeholder={"DNI: 00000000A"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />
                <div>{credencialesError.dniError}</div>

                {/* INPUT CITY */}

                <InputText
                className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    maxLength={50}
                    name={"city"}
                    placeholder={"Escribe tu ciudad"}
                    required={false}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />
                <div>{credencialesError.cityError}</div>

                {/* INPUT PHONE */}

                <InputText
                className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"text"}
                    maxLength={12}
                    name={"phone"}
                    placeholder={"+34 000000000"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />
                <div>{credencialesError.phoneError}</div>

                {/* INPUT EMAIL */}

                <InputText
                className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"email"}
                    maxLength={30}
                    name={"email"}
                    placeholder={"Escribe un email válido"}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />
                <div>{credencialesError.emailError}</div>

                {/* INPUT PASSWORD */}

                <InputText
                className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type={"password"}
                    maxLength={15}
                    name={"password"}
                    placeholder={"Escribe una contraseña"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />
                <div>{credencialesError.passwordError}</div>

                {/* Register Button */}

                <div className={registerAct ? "buttonDes buttonAct" : "buttonDes" }
                    onClick={Registro}>Registrarse 
                </div>

                </div>
            )
        }
            </Col>
        </Row>
    </Container>
    );
}
