// Como fue mencionado en el archivo index.js, esta línea siempre es necesaria
// cuando un archivo contiene código de React
import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import "./index.css";

const App = props => {
  const [state, setState] = React.useState([])
  return (
    <>
      <Nav />
      {/* <Main data={this.state.data} {...this.props}/> */}
      <Footer />
    </>
    );
}

// Tenemos que exportar el componente para poder ser usado en cualquier otro
// archivo de Reat
export default App;