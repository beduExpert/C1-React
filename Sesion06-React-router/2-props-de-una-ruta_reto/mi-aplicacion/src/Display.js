import React from 'react'

const Message = props => <p>{props.text}</p>

function Display(props) {
  const messages = props.messages.map((m, i) => <Message key={i} text={m}/>)

  return (
    <>
      { messages }
    </>
  )
}

export default Display
