import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div className="Card">
      <img src={props.image} alt={props.name}/>
      <h1>{props.name}</h1>
      <p> Username: {props.username}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}
