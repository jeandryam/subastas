// import{Formulario} from './components/form/formulario'
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>hi</h1>
//       <Formulario/>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './Components/layouts';
import { Formulario } from './Components/form/formulario'
import './App.css';
import {Login} from'./Components/Auth/Login'
import Header from './Components/Common/Header';
//import SubastaB from './routes/SubastaB';

const App = () => {
  return (
    <ChakraProvider>
      <Layout>
   <Login/> 
   {/* <Header/> */}
 {/* <Formulario/> */}
        {/* <SubastaB/> */}
      </Layout>

    </ChakraProvider>
  );
};

export default App;
