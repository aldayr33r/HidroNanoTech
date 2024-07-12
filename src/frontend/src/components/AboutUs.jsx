import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Container className="about-us text-center">
        <h1>Sobre Nosotros</h1>
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <h2>Misión</h2>
            <p>
              Desarrollar y proporcionar soluciones innovadoras y efectivas de tratamiento de agua mediante tecnologías nanotecnológicas avanzadas.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <h2>Visión</h2>
            <p>
              Ser líderes globales en la transformación y sostenibilidad de aguas residuales.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <h2>¿Quiénes Somos?</h2>
            <p>
              Somos una empresa comprometida con el desarrollo de tecnologías para el tratamiento de agua.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <h2>Nuestro Enfoque</h2>
            <p>
              Innovación y Sostenibilidad, Investigación y Desarrollo, Producción y Comercialización.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <h2>Nuestro Impacto</h2>
            <p>
              A través de HidroNanoTech, buscamos un ambiente más limpio.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <h2>Únete a Nosotros</h2>
            <p>
              Invitamos a profesionales y entusiastas a unirse a nuestro equipo.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            <img src="https://source.unsplash.com/random/800x600" alt="Random" className="img-fluid mb-3" />
          </Col>
          <Col md={4}>
            <img src="https://source.unsplash.com/random/800x601" alt="Random" className="img-fluid mb-3" />
          </Col>
          <Col md={4}>
            <img src="https://source.unsplash.com/random/800x602" alt="Random" className="img-fluid mb-3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
