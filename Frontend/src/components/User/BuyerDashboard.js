import React from 'react';
import { Box, Heading, Text, Link, Button } from '@chakra-ui/react';
import { Card, CardBody, Stack } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useNavigate,  } from 'react-router-dom'; 

export function BuyerDashboard() {
  const navigate= useNavigate();

  const handleCrearSubastaClick = () => {
    navigate('/SubForm');
  };
  return (
    <Box display="flex" justifyContent="flex-end">
      <Box width="89%" padding="4" textAlign="center">
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          border='10px'
          backgroundColor='#FF5454'
        >
          <Box flex='1' display='flex' justifyContent='center'>
            {/* Contenido del SVG */}
          </Box>
          <Stack>
            <CardBody>
              <Heading textColor='#FFFFFF' size='xl'>
                Subastas Invertidas
              </Heading>

              <Text py='3' color='#FFFFFF'>
                La mejor oferta para conseguir el mejor precio.
              </Text>
              <Button
                variant='solid'
                textColor='#FF5454'
                borderBottomRadius='10px'
                mt='3'
                onClick={handleCrearSubastaClick}  >
                CREAR NUEVA SUBASTA
              </Button>
            </CardBody>
          </Stack>
        </Card>
        <br />
        <Box bg='#FF5454' w='100%' p={4} color='white'>
          MI ÚLTIMA SUBASTA

          <Grid templateColumns='repeat(4, 1fr)' gap={5} color='#004772'>
            <GridItem w='100%' h='150' bg='#FFFFFF'>
              <Text fontSize='' textAlign='center' fontWeight='bold'>
                Descripción
              </Text>
              {/* En este campo deberás colocar la función de descripción */}
            </GridItem>
            <GridItem w='100%' h='150' bg='#FFFFFF'>
              <Text fontSize='' textAlign='center' fontWeight='bold'>
                Ofertas Recibidas
              </Text>
            </GridItem>
            <GridItem w='100%' h='150' bg='#FFFFFF'>
              <Text fontSize='' textAlign='center' fontWeight='bold'>
                Mejor Oferta
              </Text>
            </GridItem>
            <GridItem w='100%' h='150' bg='#FFFFFF'>
              <Text fontSize='' textAlign='center' fontWeight='bold'>
                Tiempo Restante
              </Text>
            </GridItem>
          </Grid>
        </Box>
        <Heading as='h1' size='xl' textColor='' marginBottom='4'>
          Todas las subastas Invertidas
        </Heading>

        <Text fontSize='lg' marginBottom='4'>
          Descubre increíbles subastas y productos.
        </Text>
        <Link href='/SubList' color='blue.500'>
          Explorar Subastas
        </Link>
      </Box>
    </Box>
  );
}
