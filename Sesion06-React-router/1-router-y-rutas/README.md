## React Router

```sh
$ cd mi-aplicacion
$ npm start
```

¿Por qué es deseable agregar un Router a una Single Page Application?

Cuándo uno hace una SPA, no tiene manera de tener rutas (http://.../inicio,
http://.../dashboard, http://.../carrito/articulos/4324/detalle), algo que
cuando no se hacía SPAs ocurrían de manera natural al poner carpetas en el
servidor web y ahí los archivos HTML, luego hubo routers en los servidores y
operan de manera similar lo que veremos hoy. Así entonces, agregar un router es
deseable porque podemos responder a un estado particular de la aplicación
directamente desde la barra de navegación y sobre todo a través de links
guardados en Tweets, comentarios, crawlers, etc.

Así es como nacen proyectos para agregar routers a las SPA, que lo que hacen es
responder con cierta parte de la aplicación dependiendo de la ruta a la cuál se
esté accediendo. Ahora veremos como agregar un router a React, existen varios
routers y cada uno hace más o menos lo mismo, lo que opera distinto es a qué le
dan peso, en este caso veremos `react-router` que es el router más usado en
React, sin ser oficial.

```sh
$ cd mi-aplicacion
$ npm install --save react-router-dom # Porque usaremos el router para web
```

Así lo que hacemos es intalar el router y agregarlo como dependencia del
proyecto. Ahora para usarlo se hace de la siguiente manera:

```js
// ...
// Traemos el Router al ámbito del componente que estamos desarrollando y lo
// ocupamos
import { BrowserRouter, Route } from 'react-router-dom'

// Componente dónde queremos exista el Router, quizás en el App mismo, quizás en
// un componente por debajo en el árbol.
// El componente puede ser de tipo clase o de tipo funcional.
function MiComponente (props) {
  // ...

  return (
    <BrowserRouter>
      { // Aquí podemos poner cualquier componente que estará por "fuera" del
        // Router. Generalmente un menú cumple este tipo de patrón
      }
      <nav>
        { // ... }
      </nav>
      { // Ahora supongamos que tenemos más componentes como Dashboard,
        // CarritoDeCompras
      }
      <Route path="/" exact component={Dashboard} />
      <Route path="/shopping-cart" exact component={CarritoDeCompras} />
    </BrowserRouter>
  )
}
// ...
```

Como podemos notar, agregar un Router es sencillo, pues solo se importa el
componente `BrowserRouter` y se ocupa. Esto cobra realmente sentido cuando se
combina con el componente `Route` que también lo provee el `react-router-dom`
que es básicamente un componente que desplegará otro componente que se le pase
via props y se desplegará en la ruta del navegador indicada en el prop `path`,
si existe el prop `exact` en la ruta, quiere decir que solo cuándo la ruta es
identica a la puesta en el código se desplegará dicho componente.

Así también cuando queremos agregar una liga interna dentro del Router, nuestra
primera intuición es agregar un ancla (a), pero esto es incorrecto dado que los
Routers proveen de un API para ese tipo de comportamiento que está dentro de su
código base para que funcione dentro del mismo Router; en el caso de
`react-router` el nombre del componente es `Link`
