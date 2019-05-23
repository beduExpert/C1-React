## Componentes de tipo Clase

```sh
$ cd mi-aplicacion
$ npm start
```

Los componentes de tipo Clase son los componentes que se declaran como Clases de
JS, es decir, extendienden a `React.Component` comunmente y hacen uso de la
palabra clave reservada de JS `class`

```js
// ...

class MiComponente extends React.Component {}

// ...
```

Así también se caracterizan por tener unos métodos que deben de implementar para
funcionar. `render` es el único método que este tipo de componentes debe de
implementar para poder trabajar

```js
// ...

class MiComponente extends React.Component {
  render () {
    // Aquí (en el return) el JSX (html) a pintar en el navegador
    return (
      <p>Hola Mundo</p>
    )
  }
}

// ...
```
