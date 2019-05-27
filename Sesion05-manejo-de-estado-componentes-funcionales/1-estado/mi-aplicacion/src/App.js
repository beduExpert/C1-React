import React from 'react';

function App(props) {
  // Aquí definiremos el nombre con el que conoceremos el estado y la función
  // con la que modificaremos dicho estado
  const [count, setCount] = React.useState(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Agregar uno
      </button>
      <p>La cuenta es: {count}</p>
    </>
  )
}

export default App;
