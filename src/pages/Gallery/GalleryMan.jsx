import React from 'react'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

import traje1M from '../../img/traje1M.png';
import traje2M from '../../img/traje2M.jpg';
import traje3M from '../../img/traje3M.png';
import traje4M from '../../img/torrenti1.jpg';
import traje5M from '../../img/torrenti2.png';
import traje6M from '../../img/torrenti3.jpg';


export const GalleryMan = () => {

    return (

    <Container>
        <Col>
            <Row>
            <h2 className='titolDesign'>Hombre Saraguey</h2>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={traje1M} />
                        <Card.Body>
                            <Card.Title>Berni</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>{' '}

                    <Card>
                        <Card.Img variant="top" src={traje2M} />
                        <Card.Body>
                            <Card.Title>Bru</Card.Title>
                        </Card.Body>
                    </Card>{' '}

                    <Card>
                        <Card.Img variant="top" src={traje3M} />
                        <Card.Body>
                            <Card.Title>Navarrete</Card.Title>
                        </Card.Body>
                    </Card>{' '}
                </CardGroup>

                <h2 className='titolDesign'>Hombre Torrentí</h2>

                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={traje4M} />
                        <Card.Body>
                            <Card.Title>Mendoza</Card.Title>

                        </Card.Body>
                    </Card>{' '}

                    <Card>
                        <Card.Img variant="top" src={traje5M} />
                        <Card.Body>
                            <Card.Title>Ossorio</Card.Title>     
                        </Card.Body>
                    </Card>{' '}

                    <Card>
                        <Card.Img variant="top" src={traje6M} />
                        <Card.Body>
                            <Card.Title>Molina</Card.Title>
                        </Card.Body>
                    </Card>{' '}
                </CardGroup>

            </Row>
        </Col>
    </Container>
    );
}