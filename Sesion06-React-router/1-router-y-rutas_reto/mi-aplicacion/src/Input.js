import React from 'react'

const buttonMessageOriginal = 'Guardar mensaje'

function Input(props) {
  const [message, setMessage] = React.useState('')
  const [buttonMessage, setButtonMessage] = React.useState(buttonMessageOriginal)

  return (
    <>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Escribe aquí..."
      />
        <button
          disabled={message === ""}
          onClick={() => {
            setButtonMessage('Guardando...')
            props.storeMessage(message)
            setTimeout(() => {
              setButtonMessage(buttonMessageOriginal)
              setMessage('')
            }, 800)
          }}
        >
          {buttonMessage}
        </button>
    </>
  )
}

export default Input
