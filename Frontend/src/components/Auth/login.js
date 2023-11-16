import React, { useState } from 'react';
import { Box, Flex, Heading, Input, Button, Text, Stack } from '@chakra-ui/react';

// Define un objeto SCREEN con los tamaños de pantalla deseados
const SCREEN = {
  xs: { max: 600 },
  sm: { max: 768 },
  md: { max: 992 },
  lg: { max: 1200 },
};

const backgroundImageUrl = 'https://i.postimg.cc/D0SdgpSk/Group-84.png'  // Reemplaza con la URL de tu imagen de fondo

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
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      background={`url(${backgroundImageUrl})`}
      backgroundSize='50%'
      backgroundPosition='center'
    >
      <Box
        padding='2rem'
        width='100%'
        maxWidth={['100%', '100%', '100p']}
        backgroundColor='rgba(255, 255, 255, 0.8)' // Agrega un fondo blanco semitransparente
        borderRadius='2rem'
        margin='2rem'
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
              placeholder='Nombre de Usuario'
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
