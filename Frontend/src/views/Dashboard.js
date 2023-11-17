import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { Card, CardBody, Stack, Button } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';

export function Dashboard() {
  return (
    <Box textAlign='center' padding='4'>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        border='10px'
        backgroundColor='#FF5454'
      >
          <Box flex='1' display='flex' justifyContent='center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="196" height="151" viewBox="0 0 196 151" fill="none">
            {<svg xmlns="http://www.w3.org/2000/svg" width="196" height="151" viewBox="0 0 196 151" fill="none">
  <path d="M52.0667 123.33L52.0509 116.471L43.9929 75.5862L51.9508 70.6367L67.893 79.5011L68.0089 132.2C68.0142 135.749 66.6975 138.146 64.6698 138.926V138.931L57.5809 143.419L56.6908 140.024L55.4742 133.844C53.4202 130.789 52.072 126.895 52.0667 123.33Z" fill="#67D0F4"/>
  <path d="M52.1036 143.25C56.5065 145.695 60.0667 142.963 60.051 137.144L59.9351 84.4452L43.9929 75.5808L44.1088 128.279C44.1193 134.099 47.7006 140.804 52.1036 143.25Z" fill="#1C7CD3"/>
  <path d="M44.6143 43.6546C52.7456 29.4691 52.7457 14.1361 44.6146 9.40742C36.4835 4.67874 23.3002 12.345 15.169 26.5305C7.03773 40.716 7.03761 56.0489 15.1687 60.7776C23.2998 65.5063 36.4831 57.8401 44.6143 43.6546Z" fill="#67D0F4"/>
  <path d="M14.9629 60.6583L75.5611 95.6597L108.135 46.3723L45.0039 9.64673L14.9629 60.6583Z" fill="#67D0F4"/>
  <path d="M38.7947 65.0666C38.7947 51.3111 48.3853 34.5796 60.2142 27.7045C65.5914 24.5799 70.5 24.0335 74.2604 25.6515L74.2656 25.6409L74.3446 25.678C74.3762 25.6939 74.4078 25.7099 74.4394 25.7258C74.6027 25.8 74.766 25.8796 74.9292 25.9645C97.2915 37.0357 122.045 42.33 146.951 41.3486L154.008 41.0727L96.5541 140.231L93.4415 134.173C82.0919 112.084 65.5072 93.1665 45.1726 79.0821C41.2384 76.8593 38.7947 72.0054 38.7947 65.0666Z" fill="#00ADF6"/>
  <path d="M89.855 117.824C89.855 91.4319 108.251 59.3428 130.94 46.1496C142.258 39.5716 152.502 38.9297 159.933 43.216L159.975 43.2372C159.996 43.2479 160.012 43.2585 160.033 43.2691L166.775 47.2477L164.42 46.7544C169.213 51.7834 172.031 59.7088 172.031 70.0374C172.031 96.4291 153.634 128.518 130.945 141.711C122.04 146.889 113.797 148.385 107.072 146.703L108.141 148.284L101.937 144.629C101.905 144.608 101.874 144.592 101.842 144.571L101.621 144.438H101.631C94.3422 140.056 89.855 130.852 89.855 117.824Z" fill="#CAECFF"/>
  <path d="M94.6633 120.651C94.6633 94.2594 113.06 62.1703 135.749 48.9771C146.914 42.484 157.031 41.7784 164.436 45.8791L165.468 46.4891C165.821 46.7119 166.163 46.9506 166.501 47.2L164.41 46.7597C169.202 51.7887 172.02 59.7141 172.02 70.0427C172.02 96.4344 153.624 128.523 130.935 141.717C122.029 146.894 113.787 148.39 107.061 146.709L108.035 148.151C99.8194 144.189 94.6633 134.619 94.6633 120.651Z" fill="white"/>
  <path d="M166.155 114.456C182.2 86.4657 182.201 56.2116 166.158 46.8817C150.115 37.5518 124.103 52.6791 108.058 80.6695C92.0139 108.66 92.0128 138.914 108.056 148.244C124.099 157.574 150.111 142.447 166.155 114.456Z" fill="#00ADF6"/>
  <path d="M162.594 112.385C176.67 87.8271 176.671 61.2833 162.595 53.0975C148.519 44.9117 125.697 58.1836 111.621 82.7411C97.5439 107.299 97.5432 133.842 111.619 142.028C125.695 150.214 148.517 136.942 162.594 112.385Z" fill="#003B7D"/>
  <path d="M135.427 138.762C155.335 127.187 171.472 99.0285 171.472 75.8781C171.472 63.7193 167.022 55.3589 159.912 51.8364C167.996 54.8231 173.158 63.5124 173.158 76.6048C173.158 99.7605 157.021 127.913 137.113 139.489C127.659 144.984 119.059 145.754 112.628 142.565C118.837 144.862 126.779 143.791 135.427 138.762Z" fill="white"/>
  <path d="M142.506 88.8855L119.638 71.0559C119.638 71.0559 110.4 81.0662 105.613 95.4848C113.955 98.9595 132.599 106.715 132.599 106.715L142.506 88.8855Z" fill="#CAECFF"/>
  <path d="M142.196 100.522C145.007 95.6173 145.007 90.3162 142.196 88.6814C139.385 87.0465 134.827 89.6971 132.016 94.6015C129.205 99.5059 129.205 104.807 132.016 106.442C134.827 108.077 139.385 105.426 142.196 100.522Z" fill="#1E93D0"/>
  <path d="M63.8955 123.781L64.1799 123.616C65.228 123.012 66.0759 121.383 66.0812 119.983L66.1128 109.819C66.118 108.418 65.2701 107.771 64.2273 108.376L63.9429 108.54C62.8948 109.145 62.0469 110.773 62.0416 112.174L62.01 122.338C62.0048 123.738 62.8474 124.386 63.8955 123.781Z" fill="white"/>
</svg>}
          </svg>
        </Box>
        <Stack>
          <CardBody>
            <Heading textColor='#FFFFFF' size='xl'>
              Subastas Invertidas
            </Heading>

            <Text py='3' color='#FFFFFF'>
              La mejor oferta de conseguir el mejor precio.
            </Text>
            <Button variant='solid' textColor='#FF5454' borderBottomRadius='10px'>
              CREAR NUEVA SUBASTA
            </Button>
          </CardBody>
        </Stack>

        
      </Card>
      <br></br>
      <Box bg='#FF5454' w='100%' p={4} color='white'>
        MI ULTIMA SUBASTA

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
      <Link href='/subastas' color='blue.500'>
        Explorar Subastas
      </Link>
    </Box>
  );
}
