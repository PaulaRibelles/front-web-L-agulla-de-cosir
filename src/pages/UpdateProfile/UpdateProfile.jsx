import React from 'react'


export const UpdateProfile = () => {
    const navigate = useNavigate();
    const credentialsRdx = useSelector(userData);

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

        //UPDATE FUNCTION

        const updateUser = () => {
            userUpdate(credenciales)
                .then(respuesta => {
                let nameUser = respuesta.data.name
                if(nameUser){
                setWelcome(`${nameUser}, los cambios se han guardado correctamente`);
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

    return (
        <Container fluid className='containerRegister'>
        <Row>
        <Col>
            <div>
                <h2>Registro de usuarios</h2>
            </div>
            {welcome !== ""? (
                <div>{welcome}</div>
            ) : (
                <div className='registerDesign'>

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
                    placeholder={"00000000A"}
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
                    type={"text"}
                    maxLength={50}
                    name={"city"}
                    placeholder={"Escribe tu ciudad"}
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
                    type={"text"}
                    maxLength={12}
                    name={"phone"}
                    placeholder={"+34 000000000"}
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
                    type={"email"}
                    maxLength={30}
                    name={"email"}
                    placeholder={"Escribe un email válido"}
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
                    type={"password"}
                    maxLength={15}
                    name={"password"}
                    placeholder={"Escribe una contraseña"}
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => inputValidate(e)}
                />

                <div>{credencialesError.passwordError}</div>
                <div className={registerAct ? "buttonDes buttonAct" : "buttonDes" }
                    onClick={updateUser}>Enviar cambios
                </div>

                </div>
            )
        }
            </Col>
        </Row>
    </Container>
    );
}
