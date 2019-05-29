## React Router

```sh
$ cd mi-aplicacion
$ npm start
```

Las props que automáticamente `react-router-dom` le pone al componente que
desplegará en alguna ruta determinada, son:

- `history` (objeto)
- `location` (objeto)
- `match` (objeto)

la más usada generalmente es: `match` porque en ella viene:

- `params` (objeto)

que son los parámetros que se le pueden pasar a una ruta, se le pueden pasar de
dos maneras, cuándo se está usando el componente `Route` y cuándo
programáticamente se está cambiando una ruta.

```js
// ...
function MiComponente (props) {
  // ...

  return (
    <BrowserRouter>
      <Route path="/orden/{:id}" exact component={OrdenDeCompra} />
    </BrowserRouter>
  )
}
// ...
```

dónde en el path podemos ver lo siguiente: `{:id}` que significa que en esa
parte de la URL, otendremos el valor ahí puesto con el nombre `id` en los
`params` que vendrán en `match` en los `props` de dicha ruta

Así también es importante el objeto `location` porque a través de él podemos
pasar información a una ruta, es decir, podemos pasar información no solo por la
URL

```js
// ...
function MiComponente (props) {
  // ...

  <Link to={{
    pathname:"/orden/67",
    aquiMasInformacion: {
      hola: 'mundo'
    }
  }} />

  // ...
}
// ...
```

Y por último el objeto `history` es importante porque con él podemos navegar de
manera programática a otra ruta

```js
// ...
function MiComponente (props) {
  // ...

  // podemos tener una ruta dependiendo de cierta condición
  const route = autenticado ? '/dashboard' : '/login'

  return (
    { //...
    }
    <button onClick={() => props.history.push(route)}>Acceder</button>
  )
}
// ...
```

como podemos notar la ruta cambia dependiendo de una condición y al dar click al
botón dependerá de la condición, si vamos a una u otra ruta.
