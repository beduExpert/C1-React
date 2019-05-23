import React from 'react';

import Title from './Title'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ip: ''
    }
  }

  componentDidMount() {
    this.getData('https://checkip.amazonaws.com')
  }

  getData = async (url) => {
    // Esto solo funcionará si se tiene una extensión que mande
    // Access-Control-Allow-Origin: *
    // como respuesta del servidor
    const response = await fetch(url).then(r => r.text())

    // Todavía no vemos por qué esto funciona, se verá en la siguiente clase
    this.setState({ip: response})
  }

  render() {
    return (
      <Title ip={this.state.ip}/>
    )
  }
}

export default App;
