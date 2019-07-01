// Como fue mencionado en el archivo index.js, esta línea siempre es necesaria
// cuando un archivo contiene código de React
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';

import Menu from './components/Menu';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Footer from './components/Footer';


import "./index.css";
import NotFound from './components/NotFound';

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
        <Route path="/" component={Menu} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/"
            exact
            render={props => <Main data={state} {...props} />}
          />
          <Route component={NotFound} />
          <Footer />
        </Switch>
      </BrowserRouter>
    </>
  );
}

// Tenemos que exportar el componente para poder ser usado en cualquier otro
// archivo de Reat
export default App;