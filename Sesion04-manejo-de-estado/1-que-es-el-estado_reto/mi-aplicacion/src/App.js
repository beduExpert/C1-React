// Como fue mencionado en el archivo index.js, esta línea siempre es necesaria
// cuando un archivo contiene código de React
import React , { Component } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import "./index.css";

class App extends Component {
  state = {
    data: []
  };

  render() {
    // Este es un componente de React que regresa un `div` con una cadena de texto
    return (
      <>
        <Nav />
        <Main />
        <div>Aquí va la información a desplegar</div>
        <Footer />
      </>
    );
  }
}

// Tenemos que exportar el componente para poder ser usado en cualquier otro
// archivo de Reat
export default App;