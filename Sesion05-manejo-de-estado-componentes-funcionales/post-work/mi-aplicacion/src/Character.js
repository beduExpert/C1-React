import React from 'react'

import './Character.css'

function Character(props) {
  return (
    <div className="Character">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <p>Username: {props.username}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default Character
