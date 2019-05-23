import React from 'react';

class Title extends React.Component {
  render() {
    return (
    <h2>
      {this.props.text} <br />
      {this.props.number} + {this.props.number} = {this.props.number + this.props.number}
    </h2>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Title text="Hola Mundo" number={5}/>
    )
  }
}

export default App;
