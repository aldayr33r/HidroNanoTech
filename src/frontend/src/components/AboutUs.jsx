import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Container className="about-us text-center">
        <Row className="justify-content-center mb-4">
          <Col md={15}>
            <h2>Sobre Nosotros</h2>
            <p>
              Desarrollar y proporcionar soluciones innovadoras y efectivas de tratamiento de aguas residuales utilizando nanotecnología de punta, convirtiendo el agua contaminada en un recurso limpio y seguro. Promover la sostenibilidad ambiental, facilitar el acceso al agua purificada para usos agrícolas y comerciales, y contribuir al bienestar de las comunidades y la preservación de los recursos naturales.
            </p>  
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={15}>
            <h2>Misión</h2>
            <p>
              Desarrollar y proporcionar soluciones innovadoras y efectivas de tratamiento de aguas residuales utilizando nanotecnología de punta, convirtiendo el agua contaminada en un recurso limpio y seguro. Promover la sostenibilidad ambiental, facilitar el acceso al agua purificada para usos agrícolas y comerciales, y contribuir al bienestar de las comunidades y la preservación de los recursos naturales.
            </p>  
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={15}>
            <h2>Visión</h2>
            <p>
              Ser líderes globales en la transformación y reutilización de aguas residuales mediante nanotecnología avanzada, contribuyendo a un mundo donde todos los recursos hídricos sean gestionados de manera sostenible, segura y eficiente, apoyando el desarrollo agrícola y la protección del medio ambiente.
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col md={4}>
            <img src="../../public/img/nanop2.jpeg" alt="Image 1" className="img-fluid mb-3 custom-image-size3" />
          </Col>
          <Col md={4}>
            <img src="../../public/img/nanop1.jpeg" alt="Image 2" className="img-fluid mb-3" />
          </Col>
          <Col md={4}>
            <img src="../../public/img/Nanop.jpeg" alt="Image 3" className="img-fluid mb-3 " />
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col md={15}>
            <h2>¿Quiénes Somos?</h2>
            <p>
              HidroNanoTech es una empresa pionera en la aplicación de nanotecnología para el tratamiento de aguas residuales. Nuestro equipo está compuesto por científicos, ingenieros y profesionales del medio ambiente apasionados por encontrar soluciones eficientes y sostenibles para los desafíos del agua. Con una amplia experiencia en investigación y desarrollo, nos esforzamos por estar a la vanguardia de la tecnología y la innovación.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={15}>
            <h2>Nuestro Enfoque</h2>
            <p>
              Utilizamos nanopartículas y nanomateriales especializados para eliminar contaminantes de manera eficiente y eficaz. Nuestro proceso de tratamiento incluye:

              Investigación y Desarrollo: Selección y pruebas de los nanomateriales más efectivos para la purificación del agua.
              Implementación de Tecnología: Desarrollo de sistemas modulares y escalables para el tratamiento de aguas residuales.
              Pruebas Piloto: Evaluación y optimización de nuestros sistemas en entornos controlados y reales.
              Escalado y Comercialización: Expansión de nuestras soluciones a nivel industrial y comercial, adaptándolas a diferentes necesidades y entornos.
              Aplicación Agrícola: Conversión del agua tratada en un recurso seguro para el riego y otras aplicaciones agrícolas, apoyando la agricultura sostenible.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={15}>
            <h2>Nuestro Impacto</h2>
            <p>
              A través de HidroNanoTech, buscamos no solo purificar el agua, sino también proporcionar soluciones accesibles y efectivas para comunidades, industrias y gobiernos. Al ofrecer agua tratada de alta calidad para uso agrícola, ayudamos a conservar los recursos hídricos naturales y apoyar la producción agrícola sostenible.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={15}>
            <h2>Únete a Nosotros</h2>
            <p>
              Invitamos a todos los interesados en la sostenibilidad del agua y la innovación tecnológica a unirse a nosotros en nuestra misión. Juntos, podemos hacer una diferencia significativa en la gestión del agua y en la protección de nuestro planeta para las futuras generaciones.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            <img src="../../public/img/logo-black-removebg-preview (1).png" alt="Image 1" className="img-fluid mb-3 custom-image-size" />
          </Col>
          <Col md={4}>
            <img src="../../public/img/Logo1.jpeg" alt="Image 2" className="img-fluid mb-3" />
          </Col>
          <Col md={4}>
            <img src="../../public/img/Logo2.png" alt="Image 3" className="img-fluid mb-3 custom-image-size1" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;

