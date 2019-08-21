## Apollo y React

Para correr Apollo con React, se necesita tener Apollo también en el lado del
servidor, en este mismo proyecto, tenemos un servidor funcionando para poder
enfocarnos en Apollo y React

Instalamos dependencias de Apollo:

```sh
$ npm install apollo-boost react-apollo graphql
```

`apollo-boost` es todo lo necesario para que Apollo Client funcione
`react-apollo` es lo necesario para que React y Apollo trabajen
`graphql` para parsear los queries

Con ApolloClient se crea un nuevo cliente:

```js
const client = new ApolloClient({
  uri: "http://localhost:4000"
});
```

mismo que será ocupado para realizar las peticiones a través de su método
`query` y con un objeto que tiene una propiedad también llamada `query` que
tiene un string con antecedido con `gpl`

```js
client
.query({
  query: gql`
    {
      Post(id: 1) {
        id
        title
        views
        User {
          name
        }
        Comments {
          date
          body
        }
      }
    }
  `
})
```

como `query` regresa una promesa, se tiene que hacer el manejo de la misma, que
en nuestro caso es setear el estado y correr esto en un `useEffect` porque
nuestro componente es funcional.
