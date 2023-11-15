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
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/layouts';
import { Formulario } from './components/form/formulario'
import './App.css';

const App = () => {
  return (
    <ChakraProvider>
      <Layout>
        <Formulario />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
