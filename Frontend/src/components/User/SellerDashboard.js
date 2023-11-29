import React from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  Button,
  Input,
  Grid,
  GridItem,
  Select,
  IconButton,
} from '@chakra-ui/react';
import { Card, CardBody, Stack } from '@chakra-ui/react';

export function SellerDashboard() {
  return (
    <Box display="flex" justifyContent="flex-end">
      {/* ... (código anterior) ... */}
      <Box bg='#00ADF6' w='100%' p={4} color='white'>
        MI ULTIMA SUBASTA

        {/* ... (código anterior) ... */}

        {/* Nueva sección de filtros */}
        <Box mt={4}>
          <Text fontSize="lg" mb={2}>
            Filtros:
          </Text>
          <Grid templateColumns='repeat(3, 1fr)' gap={5}>
            <GridItem>
              <Input placeholder='Buscar por descripción' />
            </GridItem>
            <GridItem>
              <Select placeholder='Estado'>
                <option value='activo'>Activo</option>
                <option value='ganada'>Ganada</option>
                <option value='perdida'>Perdida</option>
              </Select>
            </GridItem>
            <GridItem>
              <Button colorScheme='blue'>Aplicar Filtro</Button>
            </GridItem>
          </Grid>
        </Box>

        {/* Nueva tabla de subastas */}
        <Box mt={4}>
          {/* ... (código anterior) ... */}
        </Box>

        {/* Botón "Ir a Subastas" */}
        <Button colorScheme='blue' mt={4}>
          Ir a Subastas
        </Button>
      </Box>

      {/* Sección de sugerencias de subastas */}
      <Box mt={4}>
        <Heading as='h2' size='lg' mb={2}>
          Subastas Recomendadas
        </Heading>
        {/* ... (aquí deberías mostrar las sugerencias de subastas) ... */}
      </Box>
    </Box>
  );
}
