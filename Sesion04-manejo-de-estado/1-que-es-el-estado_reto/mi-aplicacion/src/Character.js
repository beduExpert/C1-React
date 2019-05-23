import React from 'react'

function Character(props) {
  return (
    <>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.specie}</p>
    </>
  )
}

export default Character
