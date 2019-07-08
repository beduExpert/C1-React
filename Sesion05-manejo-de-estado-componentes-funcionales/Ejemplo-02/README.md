## Ciclo de vida

```sh
$ cd mi-aplicacion
$ npm start
```

Así como hay estado en los componentes funcionales, también hay algo parecido al
ciclo de vida que tienen los componentes de tipo clase, para esta funcionalidad
existe el `hook` `useEffect` que lo que hace es recibir una función que tiene
distintos aspectos para la modificación del estado, a lo largo de algo que
simula el ciclo de vida de los componentes de tipo clase en React.

```js
// ...

function MiComponente (props) {
  const [cuenta, modificarCuenta] = React.setState(0)

  // El hook useEffect recibe una función
  React.useEffect(() => {
    // Aquí podemos por ejemplo ir a un API y bajar información pertinente, por
    // ejemplo la contabilidad de cuántas veces se ha compartido una nota en
    // Twitter
    const valor = cuantasVecesSeHaCompartido()

    // Luego modificamos el valor `cuenta` (porque ahí guardamos dicho valor
    // para ser pintado), para modificar dicho valor tenemos la función
    // modificarCuenta

    modificarCuenta(valor)

    // Como queremos que esta modificación solo ocurra cuando el componente ha
    // sido montado (emulando el componentDidMount), le pasamos a React.useEffect
    // un segundo parámetro, un arreglo vacío
  }, [])

  return (
    <p>Esta nota se ha compartido en Twitter {cuenta} veces.</p>
  )
}

// ...
```

esta sintaxis al principio resulta algo confusa, pero una vez que uno ha
interiorizado qué significa cada una de la forma en que es usado este hook, el
código es más legible y conciso
