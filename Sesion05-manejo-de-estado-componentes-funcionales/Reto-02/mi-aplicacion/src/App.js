// Como fue mencionado en el archivo index.js, esta línea siempre es necesaria
// cuando un archivo contiene código de React
import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import axios from 'axios';

import "./index.css";

const App = props => {
  const [state, setState] = React.useState([])

  React.useEffect(() => {
    const fetchLocations = async () => {
      const res = await axios.get(
        'https://bedu-travels-node.herokuapp.com/tours',
      );
      setState(res.data.data);
    };

    fetchLocations();
  }, []);
  return (
    <>
      <Nav />
      <Main data={state} {...props}/>
      <Footer />
    </>
    );
}

// Tenemos que exportar el componente para poder ser usado en cualquier otro
// archivo de Reat
export default App;