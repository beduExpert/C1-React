import React from 'react'

const Main = props => {
  return (
    <>
      <h2>Main</h2>
      <h3>{props.nombre}</h3>
      <h4>{props.visitas}</h4>
    </>
  );
}

export default Main;