import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { InputText } from '../../common/InputText/InputText';

export const Register = () => {
    const navigate = useNavigate();

    const [welcome, setWelcome] = useState("");
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
                    type="text"
                    maxLength={25}
                    name="name"
                    placeholder="Escribe tu nombre"
                    required={true}
                />

                {/* INPUT SURNAME */}

                <InputText
                type="text"
                maxLength={50}
                name="surname"
                placeholder="Escribe tus apellidos"
                required={true}
                />

                {/* INPUT DNI */}

                <InputText
                    type="text"
                    maxLength={9}
                    name="dni"
                    placeholder="00000000A"
                    required={true}
                />

                {/* INPUT CITY */}

                <InputText
                    type="text"
                    maxLength={50}
                    name="city"
                    placeholder="Escribe tu ciudad"
                    required={false}
                />

                {/* INPUT PHONE */}

                <InputText
                    type="text"
                    maxLength={12}
                    name="phone"
                    placeholder="+34 000000000"
                    required={true}
                />

                {/* INPUT EMAIL */}

                <InputText
                    type="email"
                    maxLength={30}
                    name="email"
                    placeholder="Escribe un email válido"
                />

                {/* INPUT PASSWORD */}

                <InputText
                    type="password"
                    maxLength={15}
                    name="password"
                    placeholder="Escribe la contraseña"
                    required={true}
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
