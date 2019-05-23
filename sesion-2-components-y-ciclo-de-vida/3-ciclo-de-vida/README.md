## Ciclo de vida de un componente

```sh
$ cd mi-aplicacion
$ npm start
```

Existen además otros métodos que los componentes de tipo clase pueden implementar,
pero no son obligatorios: `componentDidMount`, `componentWillUnmount`, `constructor`
entre otros

```js
// ...

class MiComponente extends React.Component {
  constructor(props) {
    super(props)
    // Aquí lógica propia del constructor, por ejemplo poner valores por defecto
    // en el componente en el estado del mismo (todavía no explicado aquí)
  }

  componentDidMount() {
    // Aquí lógica cuándo el componente ha sido montado en la vista
  }

  componentWillUnmount() {
    // Aquí lógica que se ejecutará cuándo el componente vaya a ser desmontado
    // de la vista
  }

  render () {
    return (
      <p>Hola Mundo</p>
    )
  }
}

// ...
```

Estos otros métodos junto con render, constituyen el ciclo de vida de un
componente en React. La lista aquí expuesta no es exhaustiva, pero sí la más
usada y que comunmente se ve. Dicho ciclo de vida ocurre de la siguiente manera:

```
constructor

render

componentDidMount

(si hay cambios en el componente que hayan sido disparados en componentDidMount)
render

(cuándo el componente saldrá de la vista)
componentWillUnmount
```

Por ejemplo:

```js
// ...

class MiComponente extends React.Component {
  constructor(props) {
    super(props)

    console.log("Hola desde el constructor")
  }

  componentDidMount() {
    console.log("Hola desde el componente montado")
  }

  componentWillUnmount() {
    console.log("Hola desde el conponente cuando será desmontado")
  }

  render () {
    console.log("Hola desde el pintado de información")

    return (
      <p>Hola Mundo</p>
    )
  }
}

// Cuándo esto se ejecute en el navegador veremos la siguiente secuencia:
// Hola desde el constructor
// Hola desde el pintado de información
// Hola desde el componente montado

// ...
```
