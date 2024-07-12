import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Catalog.css';

const products = [
  {
    id: 1,
    name: 'Agua Potable',
    porcentaje: '85.5 %',
    sugerencias: [
      'Uso doméstico',
      'Suministro de agua potable en comunidades rurales y urbanas'
    ],
    price: '$0.07 por litro',
    image: 'https://source.unsplash.com/random/300x200?sig=1'
  },
  {
    id: 1,
    name: 'Agua Potable',
    porcentaje: '85.5 %',
    sugerencias: [
      'Uso doméstico',
      'Suministro de agua potable en comunidades rurales y urbanas'
    ],
    price: '$0.07 por litro',
    image: 'https://source.unsplash.com/random/300x200?sig=1'
  },
  {
    id: 1,
    name: 'Agua Potable',
    porcentaje: '85.5 %',
    sugerencias: [
      'Uso doméstico',
      'Suministro de agua potable en comunidades rurales y urbanas'
    ],
    price: '$0.07 por litro',
    image: 'https://source.unsplash.com/random/300x200?sig=1'
  },
  {
    id: 1,
    name: 'Agua Potable',
    porcentaje: '85.5 %',
    sugerencias: [
      'Uso doméstico',
      'Suministro de agua potable en comunidades rurales y urbanas'
    ],
    price: '$0.07 por litro',
    image: 'https://source.unsplash.com/random/300x200?sig=1'
  },
 
];

const Catalog = () => {
  return (
    <Container className="catalog">
      <h1 className="text-center mb-4">Catálogo de Productos</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text><strong>Pureza:</strong> {product.porcentaje}</Card.Text>
                <Card.Text><strong>Sugerencias:</strong></Card.Text>
                <ul>
                  {product.sugerencias.map((sugerencia, index) => (
                    <li key={index}>{sugerencia}</li>
                  ))}
                </ul>
                <Card.Text><strong>Precio:</strong> {product.price}</Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Catalog;
