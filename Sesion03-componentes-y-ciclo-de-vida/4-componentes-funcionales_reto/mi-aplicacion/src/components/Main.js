import React, { Component } from 'react'

export default class Main extends Component {

  componentDidMount() {
    console.log("componentDidMount: ", this.props.nombre);
  }

  componentWillMount(){
    console.log("componentWillMount: ", this.props.nombre);
  }

  render() {
    console.log("render: ", this.props.nombre);
    const destino = {
      nombre: "Costa Rica",
      visitas: 420
    };
    return (
      <>
        <h2>Main</h2>
        <h3>{destino.nombre}</h3>
        <h4>{destino.visitas}</h4>
      </>
    )
  }
}
