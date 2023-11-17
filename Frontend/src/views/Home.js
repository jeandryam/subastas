import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

export function Home() {
  return (
    <Box textAlign='center' padding='4'>
      <Heading as='h1' size='xl' marginBottom='4'>
        Bienvenido a la Plataforma de Subastas
      </Heading>
      <Text fontSize='lg' marginBottom='4'>
        Descubre increíbles subastas y productos.
      </Text>
      <Link href='/subastas' color='blue.500'>
        Explorar Subastas
      </Link>
    </Box>
  );
}
