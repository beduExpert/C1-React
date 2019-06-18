// Como fue mencionado en el archivo index.js, esta línea siempre es necesaria
// cuando un archivo contiene código de React
import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import "./index.css";

// Este es un componente de React que regresa un `div` con una cadena de texto
function App() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

// Tenemos que exportar el componente para poder ser usado en cualquier otro
// archivo de React
export default App;
