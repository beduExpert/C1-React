## React Router

```sh
$ cd mi-aplicacion
$ npm start
```
Cuándo uno quiere desplegar un componente (en este caso `NoExistente`) cuando
ninguna ruta hace match con lo que tenemos declarado, basta con hacer el
componente y ponerlo dentro de una ruta, sin necesidad de especificar un `path`

```js
// ...
function MiComponente (props) {
  // ...

  return (
    <BrowserRouter>
      { // ...
      }
      <Route component={NoExistente} />
    </BrowserRouter>
  )
}
// ...
```
