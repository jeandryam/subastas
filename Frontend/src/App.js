import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/layouts';
import { Login } from './components/Auth/Login';
import { BuyerDashboard } from './components/User/BuyerDashboard';
import './App.css';
import SubForm from './components/Subastas/SubForm';
import SubDeta from './components/Subastas/SubDeta';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/BuyerDashboard' element={<BuyerDashboard />} />
          <Route path='/SubForm' element={<SubForm />} />
          <Route path='/SubDeta' element={<SubDeta />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
