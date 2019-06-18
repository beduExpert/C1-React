import React from 'react'

const Main = porps => {
  const destino = {
    nombre: 'Costa Rica',
    visitas: 420
  }
  return (
    <>
      <h2>Main</h2>
      <h3>{destino.nombre}</h3>
      <h4>{destino.visitas}</h4>
    </>
  )
}

export default Main;