import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Catalog.css';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching products...');
    fetch('http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/productos')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Products fetched successfully:', data);
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container className="catalog">
      <h1 className="text-center mb-4">Catálogo de Productos</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.src} />
              <Card.Body>
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Text><strong>Pureza:</strong> {product.porcentaje}</Card.Text>
                <Card.Text><strong>Sugerencias:</strong></Card.Text>
                <ul>
                  {Array.isArray(product.sugerencias) ? (
                    product.sugerencias.map((sugerencia, index) => (
                      <li key={index}>{sugerencia}</li>
                    ))
                  ) : (
                    <li>No suggestions available</li>
                  )}
                </ul>
                <Card.Text><strong>Precio:</strong> {product.precio}</Card.Text>
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
