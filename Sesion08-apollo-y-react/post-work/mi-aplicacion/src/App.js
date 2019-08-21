// Como fue mencionado en el archivo index.js, esta línea siempre es necesaria
// cuando un archivo contiene código de React
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Menu from './components/Menu';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Footer from './components/Footer';

import "./index.css";

const query = gql`
  {
    tours {
      _id
      title
      duration
      departures {
        price
      }
    }
  }
`;

const App = props => {
  const { data } = useQuery(query);

  return (
    <>
      {/* <Main data={state} {...props} /> */}
      <BrowserRouter>
        <Route path="/" component={Menu} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/"
          exact
          render={props => <Main data={data} {...props} />}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

// Tenemos que exportar el componente para poder ser usado en cualquier otro
// archivo de Reat
export default App;
