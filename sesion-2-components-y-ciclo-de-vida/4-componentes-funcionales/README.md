## Componentes de tipo Clase

```sh
$ cd mi-aplicacion
$ npm start
```
Hasta el momento hemos visto componentes de tipo clase en React. También existen
otros componentes llamados funcionales que no son clases sino funciones

```js
// ...

function OtroComponente(props) {}

// ...
```

Este tipo de componente no necesita implementar nada (pues no es una clase) y
solo necesita regresar JSX para operar

```js
// ...

function OtroComponente(props) {
  return (
    <p>Hola Mundo</p>
  )
}

// ...
```

Para poder acceder a los `props` que se le pueden pasar se hace a través de los
argumentos recibidos en dicha función

```js
// ...

function Padre(props) {
  return (
    <Hijo edad={20} nombre="Juan Pérez" />
  )
}

function Hijo(props) {
  return (
    <p>{props.nombre} tiene {props.edad} años.</p>
  )
}

// ...
```

Podemos notar que este tipo de componentes son más cortos que los componentes
tipo clase y que suelen ser más eficientes en cuándo a memoria, porque no tienen
ciclo de vida, así también estos componentes son más fáciles de hacerles testing
porque suelen regresar comunmente el mismo resultado con los mismos argumentos.
