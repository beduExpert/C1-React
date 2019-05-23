// Como fue mencionado en el archivo index.js, esta línea siempre es necesaria
// cuando un archivo contiene código de React
import React from 'react';

// Este es un componente de React que regresa un `div` con una cadena de texto
function App() {
  return (
    <div>Hola Mundo!</div>
  );
}

// Tenemos que exportar el componente para poder ser usado en cualquier otro
// archivo de React
export default App;
