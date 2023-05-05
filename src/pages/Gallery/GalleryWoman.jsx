import React from 'react'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

import traje1 from '../../img/traje1.jpg';
import traje2 from '../../img/traje2.jpg';
import traje3 from '../../img/traje3.jpg';
import traje4 from '../../img/traje4.jpg';
import traje5 from '../../img/traje5.jpg';
import traje6 from '../../img/traje6.jpg';


export const GalleryWoman = () => {

    return (

    <Container>
        <Col>
            <Row>
            <h2>Mujer siglo XVIII</h2>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={traje1} />
                        <Card.Body>
                            <Card.Title>Brocatel</Card.Title>
                            <Card.Text>
                                Exclusivo Brocatel tono berenjena boradado con metal oro.
                                Manteletas bordadas en oro sobre batista con lentejuelas oro .
                            </Card.Text>
                        </Card.Body>
                    </Card>{' '}

                    <Card>
                        <Card.Img variant="top" src={traje2} />
                        <Card.Body>
                            <Card.Title>Rodazes</Card.Title>
                            <Card.Text>
                                Excelente traje hecho con tela valenciana bordada con metal oro viejo.
                                Manteletas bordadas en oro y beige sobre tul de algodón y lentejuela oro.
                            </Card.Text>
                        </Card.Body>
                    </Card>{' '}

                    <Card>
                        <Card.Img variant="top" src={traje3} />
                        <Card.Body>
                            <Card.Title>Carla</Card.Title>
                            <Card.Text>
                                Estrecho de seda que lució la FMVI Carla García.
                                Manteletas bordadas artesanalmente sobre seda rallada en marfil y lentejuela oro.
                            </Card.Text>
                        </Card.Body>
                    </Card>{' '}
                </CardGroup>

                <h2>Mujer siglo XIX</h2>

                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={traje4} />
                        <Card.Body>
                            <Card.Title>Consuelo</Card.Title>
                            <Card.Text>
                                Exclusivo dibujo que lució la FMV 2020/2021 Consuelo Llobell.
                                Manteletas bordadas en oro sobre tul de algodón con lentejuelas oro .
                            </Card.Text>
                        </Card.Body>
                    </Card>{' '}

                    <Card>
                        <Card.Img variant="top" src={traje5} />
                        <Card.Body>
                            <Card.Title>Azahar</Card.Title>
                            <Card.Text>
                                Estrecho de seda con 12 colores de trama y bordado metal oro viejo.
                                Manteletas bordadas en oro y beige y lentejuela oro.
                            </Card.Text>
                        </Card.Body>
                    </Card>{' '}

                    <Card>
                        <Card.Img variant="top" src={traje6} />
                        <Card.Body>
                            <Card.Title>Bonrepos</Card.Title>
                            <Card.Text>
                                Tejido valenciano con nombre Bonrepos color azul y metal oro.
                                Manteletas bordadas artesanalmente sobre seda rallada en marfil y lentejuela oro.
                            </Card.Text>
                        </Card.Body>
                    </Card>{' '}
                </CardGroup>

            </Row>
        </Col>
    </Container>
    );
}