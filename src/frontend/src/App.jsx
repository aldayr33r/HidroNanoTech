import React, { useState } from 'react';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import Catalog from './components/Catalog';
import Carrito from './components/Carrito';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const App = () => {
  const [identity, setIdentity] = useState(null);
  const [view, setView] = useState('about');

  const handleLogin = (identity) => {
    setIdentity(identity);
  };

  const handleNavClick = (newView) => {
    setView(newView);
  };

  return (
    <div>
      {identity ? (
        <>
          <Navbar bg="dark" variant="dark" expand="lg" className='mb-3'>
            <Navbar.Brand href="#" className="ml-3">HidroNanoTech</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ml-3">
                <Nav.Link onClick={() => handleNavClick('about')}>Sobre Nosotros</Nav.Link>
                <Nav.Link onClick={() => handleNavClick('catalog')}>Catálogo</Nav.Link>
                <Nav.Link onClick={() => handleNavClick('carrito')}>Carrito</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {view === 'about' && <AboutUs />}
          {view === 'catalog' && <Catalog />}
          {view === 'carrito' && <Carrito identity={identity} />}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
