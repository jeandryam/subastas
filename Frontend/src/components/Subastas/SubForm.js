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

const SubForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    maxUnitPrice: '',
    deliveryLocation: '',
    subTime: '',
    productDetails: '',
    invoiceType: '',
    deliveryTime: '',
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

    setFormData({
      ...formData,
      productImage: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    setFormData({
      productName: '',
      quantity: '',
      maxUnitPrice: '',
      deliveryLocation: '',
      description: '',
      subTime: '',
      productDetails: '',
      invoiceType: '',
      deliveryTime: '',
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
        margin='0.5rem'
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
            <FormLabel htmlFor='productDetails'>Detalles del producto:</FormLabel>
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
          <FormControl mb='4'>
            <FormLabel htmlFor='description'>Descripción del producto:</FormLabel>
            <Input
              placeholder='Detalle las características que busca en su producto'
              type='text'
              id='description'
              name='description'
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl mb='4'>
            <FormLabel htmlFor='quantity'>Cantidad:</FormLabel>
            <Input
              placeholder='Detalle las características que busca en su producto'
              type='text'
              id='quantity'
              name='quantity'
              value={formData.quantity}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl mb='4'>
            <FormLabel htmlFor='maxUnitPrice'>Precio Base:</FormLabel>
            <Input
              placeholder='Detalle las características que busca en su producto'
              type='text'
              id='maxUnitPrice'
              name='maxUnitPrice'
              value={formData.maxUnitPrice}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl mb='4'>
            <FormLabel htmlFor='inviceType'>Tipo de factura:</FormLabel>
            <Input
              placeholder='Detalle las características que busca en su producto'
              type='text'
              id='invoiceType'
              name='ivoiceType'
              value={formData.invoiceType}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl mb='4'>
            <FormLabel htmlFor='subTime'> Duracion de la subasta:</FormLabel>
            <Input
              placeholder='Detalle las características que busca en su producto'
              type='text'
              id='subTime'
              name=''
              value={formData.subTime}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl mb='4'>
            <FormLabel htmlFor='deliveryLocation'>Lugar de Entrega:</FormLabel>
            <Input
              placeholder='Detalle las características que busca en su producto'
              type='text'
              id='deliveryLocation'
              name='deliveryLocation'
              value={formData.deliveryLocation}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl mb='4'>
            <FormLabel htmlFor='deliveryTime'>Tiempo de Entrega:</FormLabel>
            <Input
              placeholder='Detalle las características que busca en su producto'
              type='text'
              id='deliveryTime'
              name='deliveryTime'
              value={formData.deliveryTime}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl mb='4'>
            <FormLabel htmlFor='keywords'>Plabras claves:</FormLabel>
            <Input
              placeholder='Detalle las características que busca en su producto'
              type='text'
              id='keywords'
              name='keyword'
              value={formData.keywords}
              onChange={handleInputChange}
              required
            />
          </FormControl>

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
          <Button type='submit' colorScheme='teal'  mt='4'>
            Crear Subasta
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default SubForm ;