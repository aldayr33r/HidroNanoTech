import React, { useState, useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import LogoAnimation from './LogoAnimation'; // Asegúrate de importar el componente correctamente

const Login = ({ onLogin }) => {
  const [authClient, setAuthClient] = useState(null);

  useEffect(() => {
    const initAuthClient = async () => {
      try {
        const client = await AuthClient.create();
        setAuthClient(client);
        if (await client.isAuthenticated()) {
          onLogin(client.getIdentity());
        }
      } catch (error) {
        console.error('Error al inicializar el cliente de autenticación:', error);
      }
    };
    initAuthClient();
  }, [onLogin]);

  useEffect(() => {
    if (authClient) {
      const timer = setTimeout(() => {
        handleLogin();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [authClient]);

  const handleLogin = async () => {
    console.log('Intentando iniciar sesión automáticamente...');
    if (authClient) {
      try {
        await authClient.login({
          identityProvider: 'https://identity.ic0.app/#authorize',
          onSuccess: () => {
            onLogin(authClient.getIdentity());
          }
        });
      } catch (error) {
        console.error('Error al iniciar sesión automáticamente:', error);
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
      <LogoAnimation />
      {/* Puedes agregar un mensaje o indicador de carga aquí si lo deseas */}
    </div>
  );
};

export default Login;
