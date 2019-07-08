## Qué son props

```sh
$ cd mi-aplicacion
$ npm start
```

Así también algo importante en React es notar que el flujo de información ocurre
de arriba hacia abajo, o en términos de componentes, de componentes padre a
componentes hijo, y la manera de pasar información entre ellos es a través de
`props` (properties), dichas propiedades son de cualquier tipo de dato que JS
pueda manejar (cadenas, boleanos, números, arreglos, objetos de JS, funciones)

```js
// ...

class Padre extends React.Component {
  mensajeEnConsola = () => {
    console.log("Mensaje que está en el componente Padre")
  }

  render() {
    // Aquí los `props` que Hijo recibe son (nombre, edad)
    // Podemos notar que en el componente Padre hacemos uso del componente Hijo
    // en su forma de JSX
    return (
      <Hijo edad={20} nombre="Juan Pérez" imprimirMensaje={this.mensajeEnConsola} />
    )
  }
}

class Hijo extends React.Component {
  render() {
    // Aquí accedemos a la información que se le pasa al componente Hijo a
    // través de `props`.
    // Aquí podemos notar que para hacer uso de JS dentro de JSX, es necesario
    // usar las llaves dónde se hará uso del JS

    // Aquí estamos accediendo a un `prop` que es una función y la estamos
    // ejecutando
    this.props.imprimirMensaje()

    return (
      <p>{this.props.nombre} tiene {this.props.edad} años.</p>
    )
  }
}

// ...
```
