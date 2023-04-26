import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { InputText } from '../../common/InputText/InputText';
import { checkInputs } from '../../Helpers/useful';

export const Register = () => {
    const navigate = useNavigate();

    //HOOKS

        //Error Validation

        const [credenciales, setCredenciales] = useState({
            dni: "",
            name: "",
            surname: "",
            city: "",
            phone: "",
            email: "",
            password: "",
        });

        const [credencialesError, setCredencialesError] = useState({
            dniError: "",
            nameError: "",
            surnameError: "",
            cityError: "",
            phoneError: "",
            emailError: "",
            passwordError: "",
        });

        const [credencialesValid, setCredencialesValid] = useState({
            dniValid: false,
            nameValid: false,
            surnameValid: false,
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
        setCredenciales((preveState => ({...preveState, [e.target.name]: e.target.value,})));
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



    //RENDER

    return (
    <Container fluid>
        <Row>
            <Col>
            <div>
                <h2>Registro de usuarios</h2>
            </div>
            {welcome !== ""? (
                <div>{welcome}</div>
            ) : (
                <div>

                {/* INPUT NAME */}

                <InputText
                    className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type="text"
                    maxLength={25}
                    name="name"
                    placeholder="Escribe tu nombre"
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />

                {/* INPUT SURNAME */}

                <InputText
                    className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type="text"
                    maxLength={50}
                    name="surname"
                    placeholder="Escribe tus apellidos"
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />

                {/* INPUT DNI */}

                <InputText
                    className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type="text"
                    maxLength={9}
                    name="dni"
                    placeholder="00000000A"
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />

                {/* INPUT CITY */}

                <InputText
                className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type="text"
                    maxLength={50}
                    name="city"
                    placeholder="Escribe tu ciudad"
                    required={false}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />

                {/* INPUT PHONE */}

                <InputText
                className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type="text"
                    maxLength={12}
                    name="phone"
                    placeholder="+34 000000000"
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />

                {/* INPUT EMAIL */}

                <InputText
                className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type="email"
                    maxLength={30}
                    name="email"
                    placeholder="Escribe un email válido"
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />

                {/* INPUT PASSWORD */}

                <InputText
                className={
                    credencialesError.passwordError === ""
                        ? "inputBasicDesign inputDesign"
                        : "inputBasicDesign inputErrorDesign"
                    }
                    type="password"
                    maxLength={15}
                    name="password"
                    placeholder="Escribe una contraseña"
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />

            <div className='buttonAct' onClick={() => logmeIn()}>Enviar</div>

                </div>
            )
        }
            </Col>
        </Row>
    </Container>
    );
}
