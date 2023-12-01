import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const SubDeta = ({ subastaDetails }) => {
  if(!subastaDetails){
    return <div>Subastas no disponibles</div>
  }
  return (
    <Box>
      <Heading as="h2" size="xl" mb="4">
        Detalles de la Subasta
      </Heading>
      <Text>Nombre del Producto: {subastaDetails.productName}</Text>
      <Text>Detalles del Producto: {subastaDetails.productDetails}</Text>
      <Text> Descripción del Producto: {subastaDetails.description}</Text>
      <Text> Cantidad : {subastaDetails.quantity}</Text>
      <Text> Precio Base: {subastaDetails.maxUnitPrice}</Text>
      <Text> Lugar de Entrega: {subastaDetails.deliveryLocation}</Text>
      <Text> Duracion de la subasta : {subastaDetails.subTime }</Text>
      <Text> Tipo de Comporbante: {subastaDetails.invoiceType}</Text>
      <Text> Tiempo de Entrega: {subastaDetails.deliveryTime}</Text>
      <Text> image: {subastaDetails.productImage}</Text>
      <Text> Palabras clave: {subastaDetails.keywords}</Text> 

      {/* Agrega más detalles según sea necesario */}
    </Box>
  );
};

export default SubDeta;
