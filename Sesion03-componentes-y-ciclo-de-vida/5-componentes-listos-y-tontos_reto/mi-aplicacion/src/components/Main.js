import React from 'react'

const Main = props => {
  const style = {
    color: 'red'
  }
  return (
    <>
      <h2>Main</h2>
      <h3 style={{ color: style.color }}>{props.nombre}</h3>
      <h4>{props.visitas}</h4>
    </>
  )
}

export default Main;