import React, { useState } from 'react';
import { Box, Flex, Heading, Input, Button, Text, Stack } from '@chakra-ui/react';
import SubastaB from '../../routes/SubastaB';

const SCREEN = {
  xs: { max: 600 },
  sm: { max: 768 },
  md: { max: 992 },
  lg: { max: 1200 },
};
const backgroundImageUrl = 'https://i.postimg.cc/D0SdgpSk/Group-84.png'

export function Formulario() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Por favor, ingresa tu nombre de usuario y contraseña.');
    } else {
      setError('');
      alert('Inicio de sesión exitoso');
    }
  };

  return (
    <Flex
      justifyContent='center'
      alignItems='center' // Centra verticalmente
      minHeight='100vh'
      background={`url(${backgroundImageUrl})`}
      backgroundSize='auto'
      backgroundPosition='center'
    >
      <Box
        padding='2rem'
        width='100%'
        maxWidth={['100%', '100%', '450px', '450px']}
        backgroundColor='rgba(255, 255, 255, 0.8)'
        borderRadius='2rem'
        margin='2rem' // Centra horizontalmente
        display='flex'
        flexDirection='column'
      >
        <Text fontSize='2xl' marginBottom='4' textAlign='center'>
          ¡Qué bueno tenerte de vuelta!
        </Text>
  
        <form>
          <Stack spacing='4'>
            <Input
              type='text'
              placeholder='Correo Electronico'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type='password'
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type='button'
              onClick={handleLogin}
              backgroundColor='#0FABDE'
              color='white'
              _hover={{ backgroundColor: 'darkblue' }}
            >
              Iniciar Sesión
            </Button>
          </Stack>
        </form>
        {/* Mensajes de error o cualquier otro contenido */}
      </Box>
    </Flex>
  );
}
