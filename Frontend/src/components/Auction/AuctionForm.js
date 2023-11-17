import React, { useState } from 'react';
import { Box, Flex, Heading ,Text} from '@chakra-ui/react';  // Asegúrate de tener las importaciones necesarias

const AuctionForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    maxUnitPrice: '',
    deliveryLocation: '',
    deliveryTime: '',
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
      deliveryTime: '',
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
      // Asegúrate de tener la variable backgroundImageUrl definida
      // background={`url(${backgroundImageUrl})`}  
      backgroundSize='50%'
      backgroundPosition='center'
    >
      <Box
        padding='2rem'
        width='100%'
        maxWidth={['100%', '100%', '100%']}
        backgroundColor='rgba(255, 255, 255, 0.8)'
        borderRadius='2rem'
        margin='2rem'
        display='flex'
        flexDirection='column'
      >
        <Text> Ficha deproducto </Text>
        <form onSubmit={handleSubmit}>
          {/* Campos del formulario */}
          <label htmlFor="productName">Nombre:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
          <label htmlFor='maxUnitPrice'> Precio:</label>
          <imput
           type="text"
           id="maxUnitPrice"
           name="maxUnitPrice"
           value={formData.maxUnitPrice}
           onChange={handleInputChange}
           required
           />


          {/* Otros campos del formulario... */}

          {/* Campo de carga de imágenes */}
          <label htmlFor="productImage">Subir foto referencial:</label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            onChange={handleImageUpload}
            accept="image/*"
          />

          {/* Botón de envío */}
          <button type="submit">Crear Subasta</button>
        </form>
      </Box>
    </Flex>
  );
};

export default AuctionForm;
