## Manejo de estado

```sh
$ cd mi-aplicacion
$ npm start
```

Como hemos visto, el estado es algo que está presente en los componentes de tipo
clase, pero en esta clase veremos que hay manera de meter cierta funcionalidad
de React (estado y ciclo de vida) a los componentes funcionales. Es decir, antes
de que existieran los Hooks en React, los componentes que tenían estado solo
eran los componentes de tipo clase.

```js
// ...

class MiComponente extends React.Component {
  state = {
    cuenta: 0
  }

  // En algún método interno a esta clase se modifica el estado
  computoDeCuenta = () => {
    const cuenta = funcionQueComputaCuenta() // Lógica computa el nuevo estado

    this.setState({cuenta: cuenta}) // Concretamente aquí estamos modificando el estado
    // this.setState({cuenta}) // O así aprovechando las bondades de ES6
  }

  render() {
    // Aquí estamos accediendo al valor de cuenta, que primero es de 0, y una
    // vez que se ha computado un nuevo valor, lo que regrese ese computo
    return (
      <p>La cuenta es: {this.state.cuenta}</p>
    )
  }

// ...
```

el código de arriba nos es familiar porque es la forma en que se declara el
estado y en cómo se modifica el mismo en algún método interno de la clase
(componente). El simil para con componentes funcionales es:

```js
// ...

function MiComponente (props) {
  const [cuenta, modificarCuenta] = React.setState(0)

  // Aquí la lógica del cómputo del nuevo valor de `cuenta` y que se actualiza
  // con `modificarCuenta` (este nombre es asignado por el programdor)

  // Si la lógica de cambiar el valor de cuenta está ligada a un botón quedaría
  // así:
  return (
    <>
      <button onClick={() => modificarCuenta(count + 1)}>
        Agregar uno
      </button>
      <p>La cuenta es: {cuenta}</p>
    </>
  )
}

// ...
```

como podemos ver, la lógica para hacer lo mismo (tener un estado y modificarlo)
en los componentes funcionales es menos verbosa y con ello más simple y fácil de
entender
