import React from 'react';

class App extends React.Component {
  state = {
    nombre: '',
    edad: 0,
    estaViva: false,
  }

  componentDidMount() {
    this.setState((state, props) => {
      return {edad: state.edad + 1}
    })
  }

  render() {
    return (
      <div>Hola Mundo</div>
    )
  }
}

export default App;
