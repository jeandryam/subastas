import React, { useState } from 'react';
import { Box, Flex, Heading, Input, Button, Text } from '@chakra-ui/react';
import SubastaB from '../../routes/SubastaB';

// Define un objeto SCREEN con los tamaños de pantalla deseados
const SCREEN = {
  xs: { max: 600 },
  sm: { max: 768 },
  md: { max: 992 },
  lg: { max: 1200 },
};

export function Formulario() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Verifica las credenciales aquí (puedes agregar lógica personalizada)
    if (!username || !password) {
      setError('Por favor, ingresa tu nombre de usuario y contraseña.');
    } else {
      // Simulamos una verificación exitosa aquí
      setError('');
      alert('Inicio de sesión exitoso'); // Puedes cambiar esto con redireccionamiento u otras acciones
    }
  };

  return (
    <Flex
      justifyContent='end'
      position='relative'
      height='100%'
      alignItems='center'>
      <Box
        padding='2rem'
        width='100%'
        maxWidth={
          window.innerWidth < SCREEN.xs.max
            ? `${window.innerWidth - 50}px`
            : '450px'
        }
        backgroundColor='#FFFFFF'
        borderRadius='2rem'
        margin='2rem'
        display='flex'
        flexDirection='column'>
        <Box textAlign="center" color="#00335B">
      <Text fontSize="2xl" marginBottom="4">
        ¡Qué bueno tenerte de vuelta!
      </Text>

      <form>
        <Box marginBottom="4">
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Nombre de Usuario:
          </label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box marginBottom="4">
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Contraseña:
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button
          type="button"
          onClick={SubastaB}
          backgroundColor="#0FABDE"
          color="white"
          _hover={{ backgroundColor: 'darkblue' }}
        >
          Iniciar Sesión
        </Button>
      </form>
      {error && <Text color="red">{error}</Text>}
    </Box>
      </Box>
    </Flex>
  );
}
