import React from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex position="relative">
      {/* Contenedor de Comprador y Vendedor superpuesto */}
      <Box
        position="absolute"
        top="2"
        left="0"
        zIndex="1"
        width="160px"
        bg="white"
        p={4}
        mr={4}  // Ajusta el margen derecho según tus necesidades
      >
        {/* Contenido del menú */}
        <Button variant="outline" colorScheme="teal" mb={2}>
          Comprador
        </Button>
        <Button variant="outline" colorScheme="teal">
          Vendedor
        </Button>
        <Box>
        <Button variant="outline" colorScheme="teal" mb={2}>
          Comprador
        </Button>
        <Button variant="outline" colorScheme="teal">
          Vendedor
        </Button>
        <Button variant="outline" colorScheme="teal" mb={2}>
          Comprador
        </Button>
        <Button variant="outline" colorScheme="teal">
          Vendedor
        </Button>
        <Button variant="outline" colorScheme="teal" mb={2}>
          Comprador
        </Button>
        <Button variant="outline" colorScheme="teal">
          Vendedor
        </Button>
        </Box>
      </Box>

      {/* Contenido principal */}
      <Box flex="1">
        <Box bg="white" p={4}>
          {/* Título y botón de cerrar sesión */}
          <Flex alignItems="center">
            <Heading color="black"></Heading>
            <Box flex="1" />
            <Button colorScheme="red">Cerrar Sesión</Button>
          </Flex>
        </Box>

        {/* Resto del contenido principal */}
        {/* ... */}
      </Box>
    </Flex>
  );
}

export default Header;
