## Manejo de estado

```sh
$ cd mi-aplicacion
$ npm start
```
Como se vio en la clase pasada, los componentes de tipo clase tienen ciclo de
vida y rápidamente vimos que tienen estado. En esta clase profundizaremos en el
estado.

El estado es lo que hace dinámico a un componente de React. Hemos visto que los
componentes se han comportado de manera estática, pero veremos como hacer
totalmente dinámico un componente y con ello dependemos de saber qué es el
estado y como modificarlo.

El estado, así como los props, son un objeto de JavaScript; el estado a
diferencia de los props, es interno al componente y se usa para modificar
aspectos internos del componente. Por ejemplo en el estado se puede guardar la
información a pintar por otro componente, o se puede mantener una bandera para
saber si una parte del componente debe pintar o no cosas en el navegador.

Hay dos formas de definir el estado de un componente, en el constructor o fuera
de él, como propiedades de la clase misma dónde se está declarando:

```js
// ...

class MiComponente extends React.Component {
  // Así se declara el estado en el constructor:
  constructor(props) {
    super(props)

    this.state = {} // El estado es un objeto de JavaScript, en particular aquí
                    // es un objeto vacío, pero al ser un objeto, puede tener cualquier
                    // propiedad dentro
  }

  render() {}
}


class OtroComponente extends React.Component {
  state = {} // Aquí el estado es un objeto vacío de JavaScript, pero una vez
             // más, puede tener cualquier propiedad dentro

  render() {}
}

// ...
```

El estado generalmente tiene las cosas que guardará en su forma inicial, por
ejemplo si guardará una cadena, suele ser el valor por defecto de las cadenas
(una cadena vacía), sí contendrá un número, suele ser el valor por defecto de
los números (el número 0), y así con cada una de las propiedades que contenga el
estado. Por ejemplo si tenemos un componente que tendrá por estado, el nombre de
una persona, su edad y si está viva o muerta, podría modelarse de la siguiente
manera:

```js
// ...

class Persona extends React.Component {
  state = {
    nombre: '',
    edad: 0,
    estaViva: false,
  }

  render() {}
}

// ...
```
