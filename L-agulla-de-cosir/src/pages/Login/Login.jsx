import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { InputText } from '../../common/InputText/InputText';




export const Login = () => {

//Hook que activa el botón de envío de datos

const [welcome, setWelcome] = useState("");



//Render

    return (
    <Container fluid>
        <Row>
            <Col lg={6}>
                <div>
                    <h2>Inicia sesión</h2>
                </div>
                    {welcome !=="" ? (
                        <div>{welcome}</div>
                    ):(
                        <div>
                            <InputText
                                className={"inputDesign"}
                                type={"email"}
                                name={"email"}
                                placeholder={"email@example.com"}
                                required={true}
                            />
                            <InputText
                                className={"inputDesign"}
                                type={"password"}
                                name={"password"}
                                placeholder={"password"}
                                required={true}
                            />
                        </div>
                    )
                }
                <div className='buttonAct' onClick={() => logmeIn()}>Login</div>
            </Col>
        </Row>
    </Container>
    )
}
