// Como fue mencionado en el archivo index.js, esta línea siempre es necesaria
// cuando un archivo contiene código de React
import React , { Component } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import axios from 'axios';

import "./index.css";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchLocations()
  }

  async fetchLocations() {
     try {
       // const res = await axios.get(`https://rickandmortyapi.com/api/character/${random}/`)
       const res = await axios.get(
         "https://bedu-travels-node.herokuapp.com/tours"
       );
       console.log('data: ', res.data)
       this.setState({ data: res.data.data});
     } catch (err) {
       console.log(err);
     }
  }

  render() {
    // Este es un componente de React que regresa un `div` con una cadena de texto
    return (
      <>
        <Nav />
        <Main data={this.state.data} {...this.props}/>
        <Footer />
      </>
    );
  }
}

// Tenemos que exportar el componente para poder ser usado en cualquier otro
// archivo de Reat
export default App;