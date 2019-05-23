## Manejo de estado

```sh
$ cd mi-aplicacion
$ npm start
```

El estado por sí mismo así, solamente declarado, no funciona de mucho, su
verdadera potencia está en el hecho de que puede ser modificado, pero además
puede ser modificado en el ciclo de vida de un componente. Y esta combinación
entre estado y poder ser modificado en el ciclo de vida es lo que hace a React
lo que es.

```js
// ...

class Persona extends React.Component {
  state = {
    nombre: '',
    edad: 0,
    estaViva: false,
  }

  componentDidMount() {
    this.setState({
      nombre: 'Juan Pérez',
      edad: 20,
      estaViva: true,
    })
  }

  render() {}
}

// ...
```

El componente así como está puesto, tiene más vida, pero es cuándo la
información es dinámica como tiene un mayor alcance esta unión entre estado y
ciclo de vida.

```js
// ...

class Persona extends React.Component {
  state = {
    nombre: '',
    edad: 0,
    estaViva: false,
  }

  componentDidMount() {
    fetch(url) // Una url que traiga información como yo la espero
    .then(respuesta => {
      this.setState({
        nombre: respuesta.nombre,
        edad: respuesta.edad,
        estaViva: respuesta.estaViva,
      })
    })
  }

  render() {}
}

// ...
```

Como podemos notar, para modificar el estado no lo hacemos directamente
modificándolo como se haría con cualquier objeto de JavaScript, sino que lo
modificamos a través de `setState` que es un método que tiene todo componente de
tipo clase en React. Este método, modifica solo las propiedades que le estamos
pasando y deja intactas las que no se le pasan, así si tenemos un estado que
tenga 5 propiedades y modificamos solo 2 de ellas con `setState` solo cambian
las dos que modificamos, y quedan intactas las 3 restantes.
