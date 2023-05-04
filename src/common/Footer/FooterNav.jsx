import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './FooterNav.css';

import lagullaFoot from '../../img/L-agulla-de-cosir-logo.png';
import instagram from '../../img/Instagram.png';
import facebook from '../../img/facebook.png'

export const FooterNav = () => {
    return (
        <div className='FootDesign'>
        <Container fluid>
            <Row>
                <Col md={4} className='footer-D d-flex flex-column justify-content-space-around'>
                    <h5>Contacto</h5>
                    <p>C/Noverdadera 12, València.</p>
                    <p>lagulla@decosir.com</p>
                    <p>+34 000 000 00</p>
                    <img className='instagramIcon' src={instagram}/>
                    
                </Col>

                <Col md={4} className='footer-D d-flex flex-column justify-content-space-around'>
                    <h5>Terminos legales</h5>
                    <p>Aviso legal</p>
                    <p>Política de privacidad</p>
                    <p>Política de cookies</p>
                    <img className='facebookIcon' src={facebook}/>
                </Col>

                <Col md={4} className='footer-D redes d-flex flex-column justify-content-space-around'>
                    <img className="d-block" src={ lagullaFoot } alt="lagullafoot"/>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
