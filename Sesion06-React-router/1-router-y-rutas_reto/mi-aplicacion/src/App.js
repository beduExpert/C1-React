// Como fue mencionado en el archivo index.js, esta línea siempre es necesaria
// cuando un archivo contiene código de React
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import axios from 'axios';

import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';


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
      {/* <Main data={state} {...props} /> */}
      <BrowserRouter>
        <Menu />
        {/* <Route path="/" component={Menu} /> */}
        <Route
          path="/"
          exact
          render={props => <Main data={state} {...props} />}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

// Tenemos que exportar el componente para poder ser usado en cualquier otro
// archivo de Reat
export default App;