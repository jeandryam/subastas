import React, { useState } from 'react';
import { Box, Flex, Heading, Input, Button, Text, Stack } from '@chakra-ui/react';
//import { useHistory } from 'react-router-dom';

import {useNavigate} from 'react-router-dom';


const SCREEN = {
  xs: { max: 600 },
  sm: { max: 768 },
  md: { max: 992 },
  lg: { max: 1200 },
};

const backgroundImageUrl = 'https://i.postimg.cc/D0SdgpSk/Group-84.png'

export function Login() {
 // const history = useHistory();
   const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = () => {
      
      if (!username || !password) {
        setError('Por favor, ingresa tu nombre de usuario y contraseña.');
      } else {
        // Simulamos una verificación exitosa aquí
        setError('');
        alert('Inicio de sesión exitoso'); 
        navigate('/BuyerDashboard')
      //history.push('/BuyerDashboard');
      }
    };

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      background={`url(${backgroundImageUrl})`}
      backgroundSize='cover' 
      backgroundPosition='cover'
      backgroundRepeat='no-repeat'
    >
      <Box
        padding='2rem'
        width='100%'
        maxWidth={['100%', '100%', '450px']}
        backgroundColor='#FFF'
        borderRadius='2rem'
        margin={['auto', 'auto', 'auto 0']} 
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
              Text='correo Electronico'
              placeholder='Correo Electronico'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type='password'
              Text='contraseña'
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type='button'
              onClick={handleLogin}
              backgroundColor='#0FABDE'
              color='white'
              _hover={{ backgroundColor: '#004772' }}>
              Iniciar Sesión
            </Button>
          </Stack>
        </form>
        {/* Mensajes de error o cualquier otro contenido */}
      </Box>
    </Flex>
  );
}
