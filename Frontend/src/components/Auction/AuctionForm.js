import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react';

const backgroundImageUrl = "https://ibb.co/BnFgBq7"

const AuctionForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    maxUnitPrice: '',
    deliveryLocation: '',
    subTime: '',
    productDetails: '',
    invoiceType: '',
    auctionDuration: '',
    productImage: null,
    keywords: '',
    termsAgreed: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Lógica para procesar y almacenar la imagen según tus necesidades
    setFormData({
      ...formData,
      productImage: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de validación y negocios aquí

    // Por ejemplo, puedes enviar el formulario al servidor o almacenar en el estado local

    // Limpiar el formulario después de enviar
    setFormData({
      productName: '',
      quantity: '',
      maxUnitPrice: '',
      deliveryLocation: '',
      description: '',
      subTime: '',
      productDetails: '',
      invoiceType: '',
      auctionDuration: '',
      productImage: null,
      keywords: '',
      termsAgreed: false,
    });
  };

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      backgroundSize='50%'
      backgroundPosition='center'
    >
      <Box
        padding='2rem'
        width='80%'
        maxWidth={['50%', '50%', '50%']}
        backgroundColor='#FFFF'
        borderRadius='2rem'
        margin='2rem'
        display='flex'
        flexDirection='column'
      >
        <Text fontSize='2xl' mb='4'>
          Ficha de producto
        </Text>
        {/* Agregando la imagen en la parte superior */}
        <Box
          bgImage={`url(${backgroundImageUrl})`}
          bgSize='cover'
          bgPosition='center'
          height='150px'
          mb='4'
        />
        <form onSubmit={handleSubmit}>
          {/* Campos del formulario */}
          <FormControl mb='4'>
            <FormLabel htmlFor='productName'>Nombre:</FormLabel>
            <Input
              placeholder='Ingrese el nombre del producto'
              type='text'
              id='productName'
              name='productName'
              value={formData.productName}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl mb='4'>
            <FormLabel htmlFor='productDetails'>Descripción del producto:</FormLabel>
            <Input
              placeholder='Detalle las características que busca en su producto'
              type='text'
              id='productDetails'
              name='productDetails'
              value={formData.productDetails}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          {/* Otros campos del formulario... */}

          {/* Campo de carga de imágenes */}
          <FormControl mb='4'>
            <FormLabel htmlFor='productImage'>Subir foto referencial:</FormLabel>
            <Input
              type='file'
              id='productImage'
              name='productImage'
              onChange={handleImageUpload}
              accept='image/*'
            />
          </FormControl>

          {/* Botón de envío */}
          <Button type='submit' colorScheme='teal' mt='4'>
            Crear Subasta
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default AuctionForm;
