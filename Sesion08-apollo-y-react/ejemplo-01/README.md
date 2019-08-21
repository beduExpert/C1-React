## GraphQL

GraphQL es un lenguaje para hacer consultas. Así como SQL es un lenguaje para
consultas también. La diferencia es que SQL se ocupa en base de datos bien
estructuradas como lo son las basadas en SQL (Básicamente las que tienen tablas)
con información bien definida; GraphQL suele estar por encima de este tipo de
bases de datos y sobre las que no están estructuradas, como las llamadas NoSQL
(Mongo).

Así la principal diferencia frente a otros lenguajes de consulta es que no
necesita que la base de datos esté o no estructurada, es decir, es independiente
de la base de datos. Otra ventaja que tiene GraphQL por sobre otros lenguajes de
consulta es que está pensado como un grafo, es decir, con nodos y aristas que
conectan dichos nodos. Esto permite tener relaciones y consultas muy específicas
sin la complejidad de como se tengan guardado los datos.

Supongamos que existe una base de datos de tipo SQL, dónde una tabla es de
personas, y otra tabla es la relación de amistad que tienen dichas personas
entre sí. Una consulta válida ahí sería preguntarnos:

```
Un persona determinada (supongamos la que tiene el id: 23) cuántas amistades
tiene.

La consulta tiene que preguntar por la relación que hay entre la tabla que tiene
personas y la tabla que tiene dichas relaciones. Hasta aquí ambas consultas (SQL
y GraphQL) suelen ser muy similar.

Pero qué pasa si buscamos por las amistades que tienen los amigos de la persona
que tiene el id: 23. Esta consulta es recursiva para un modelo que tenga los
datos estructurados en una base de datos tipo SQL. Pero para una consulta de
tipo GraphQL, dichas relaciones son solo seguir un tipo de arita que conecta
nodos, no iportando que dichos nodos coincidan entre sí. Y es así que este tipo
de lenguajes de consulta tienen un gran poder.
```

Otra caracteristica de GraphQL es que en un solo request se pueden obtener
muchos datos de distinto tipo, que a diferencia de las peticiones de tipo REST,
suelen requerir más de uno para obtener distintos tipos de datos

Así también es caracteristico de GraphQL que mientras se pueda, está tipada la
información.

Podemos levantar un servidor de pruebas con una interfaz gráfica para poder
experimentar con GraphQL, en la carpeta `mi-aplicacion` corremos lo siguiente:

```sh
$ npm install # Para instalar las dependencias del proyecto
$ npm start # Para levantar el proyecto en http://localhost:3000
```

Ya en la interfaz gráfica que levanta el servidor, ahí podemos ingresar
`queries` que serán ejecutados y mostrados a nosotros via la misma interfaz. Por
ejemplo:

```js
{
  Post(id: 1) {
    title
  }
}
```

Nos muestra el Post que tiene por id: 1, y solo nos muestra el título, no
importando que la entidad (Post) tiene más información en sí misma, pero como lo
dijimos GraphQL nos trae la información precisa que necesitamos (consultamos)

```js
{
  Post(id: 1) {
    title
    Comments {
      body
    }
  }
}
```

Dónde estamos consultando por la misma entidad, pero que ahora nos traiga
también los comentarios relacionados a dicha entidad.
