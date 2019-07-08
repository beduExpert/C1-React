import React from 'react'

function App(props) {
  const [message, setMessage] = React.useState('')

  React.useEffect(() => {
    setMessage('Cámbiame...')
  }, [])

  return (
    <>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Escribe aquí..."
      />
      <p>{ message }</p>
    </>
  )
}

export default App;
