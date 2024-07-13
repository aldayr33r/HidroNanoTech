import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import logo from '../../public/img/logo-black-removebg-preview (1).png'; // Asegúrate de poner la ruta correcta a tu logo

const LogoAnimation = () => {
  const styles = useSpring({
    loop: true,
    to: [{ transform: 'scale(1.5)' }, { transform: 'scale(1.3)' }],
    from: { transform: 'scale(1.3)' },
    config: { duration: 1000 },
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
      <animated.img src={logo} style={styles} alt="logo" />
    </div>
  );
};

export default LogoAnimation;
