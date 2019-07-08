import React from 'react'

const Card = props => {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Card;