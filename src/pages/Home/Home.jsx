import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import "./Home.css";
import isologotipo from '../../img/L-agulla-de-cosir-logo.png';
import maquinacoser from '../../img/procesos-sastreria.jpg';
import trajeMujer from '../../img/mujer-fallera.jpg';
import trajeHombre from '../../img/fallero-hombre.jpg';

export const Home = () => {
  return (
    <Container 
    fluid
    className='homeDesign'
    >

      {/* FIRST CONTAINER: L'AGULLA DE COSIR */}

      <Card 
        className='LagullaDesign'
        style={{height: '20rem', width:'62rem'}}>
          <Card.Img 
            className='isologoDesign'
            src={isologotipo} 
            alt="isologotipo"
            style={{height: '15rem', width:'20rem' }}
        />
      </Card>

      {/* CARD GROUP: SERVICES */}

      <CardGroup
      className='GroupCardDesign'
      >

        {/* Card Pide Cita */}

      <Card>
        <Card.Img 
          variant="top" 
          src={maquinacoser}
          />
        <Card.Body>
          <Card.Title>Pide cita</Card.Title>
          <Card.Text>
            Cada uno de nuestro/as indumentaristas están especializados en un tipo de traje.
            Pide cita y cuentáles cómo es tu traje de ensueño.
          </Card.Text>
        </Card.Body>
      </Card>

        {/* Card Indumentaria Femenina */}

      <Card>
        <Card.Img 
        variant="top" 
        src={trajeMujer}
        />
        <Card.Body>
          <Card.Title>Indumentaria femenina</Card.Title>
          <Card.Text>
            Visita nuestra galería para conocer los trajes ya confeccionados por nuestros/as costureros/as.
          </Card.Text>
        </Card.Body>
      </Card>

        {/* Card Indumentaria Masculina */}

      <Card>
        <Card.Img 
        variant="top" 
        src={trajeHombre}
        />
        <Card.Body>
          <Card.Title>Indumentaria masculina</Card.Title>
          <Card.Text>
            Visita nuestra galería para conocer los trajes ya confeccionados por nuestros/as costureros/as.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </Container>
  )
}
