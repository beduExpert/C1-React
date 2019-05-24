import React from 'react';

// Esta función es la simulación de traer la información de cuántas veces ha
// sido compartida un mensaje en Twitter
function getShared() {
  return 65
}

function App(props) {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const share = getShared()
    setCount(share)
  }, [])

  return (
    <p>Este mensaje ha sido compartido en Twitter {count} veces.</p>
  )
}

export default App;
