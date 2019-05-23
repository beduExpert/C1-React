import React from 'react'

import './Character.css'

function Character(props) {
  return (
    <div className="Character">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.specie}</p>
    </div>
  )
}

export default Character
