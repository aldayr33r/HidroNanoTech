import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carrito = ({ identity }) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (identity) {
      fetchProductos();
      fetchCarrito();
    }
  }, [identity]);

  const fetchProductos = async () => {
    const response = await fetch('/productos');
    const data = await response.json();
    setProductos(data);
  };

  const fetchCarrito = async () => {
    const response = await fetch('/carrito', {
      headers: {
        'Authorization': `Bearer ${identity}`
      }
    });
    const data = await response.json();
    setCarrito(data);
  };

  const handleAgregar = async (productoId, cantidad) => {
    await fetch('/carrito/agregar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${identity}`
      },
      body: JSON.stringify({ productoId, cantidad })
    });
    fetchCarrito();
  };

  const handleComprar = async () => {
    await fetch('/carrito/comprar', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${identity}`
      }
    });
    fetchCarrito();
  };

  if (!identity) {
    return <div>Autenticándose...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Carrito de Compras</h2>
          <ul>
            {carrito.map(item => (
              <li key={item.id}>
                {item.nombre} - {item.cantidad}
              </li>
            ))}
          </ul>
          <Button variant="primary" onClick={handleComprar}>Comprar</Button>
        </Col>
        <Col>
          <h2>Catálogo</h2>
          <ul>
            {productos.map(producto => (
              <li key={producto.id}>
                {producto.nombre} - {producto.precio}
                <Button variant="primary" onClick={() => handleAgregar(producto.id, 1)}>Agregar al Carrito</Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Carrito;
