

// src/App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/layouts';
//import { Formulario } from './components/form/formulario'
import './App.css';
import { Dashboard } from './views/Dashboard';
import AuctionForm from './components/Auction/AuctionForm';

const App = () => {
  return (
    <ChakraProvider>
      <Layout>
        {/* <Formulario /> */}

        <AuctionForm/>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
