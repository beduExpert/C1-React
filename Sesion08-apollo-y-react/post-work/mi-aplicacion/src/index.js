// Todo archivo de React debe de llevar esta línea que importa React en el
// ámbito de este archivo. Es necesario para todo archivo que tenga `React`
// dentro
import React from 'react';
// Esta línea solo es necesaria cuándo se está haciendo el anclaje entre React y
// el punto de montaje con el HTML. Como su nombre lo indica requerimos las
// cosas de React que son necesarias para usarse en el DOM
import ReactDOM from 'react-dom';
// Esta línea está importando un nuevo componente de React que se encuentra en
// la ruta especificada
import App from './App';
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const httpLink = new HttpLink({ uri: 'https://bedutravels.coderdiaz.me/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDVkYjQ5Nzk3NmVhZTAwMTczNmNjMGEiLCJpYXQiOjE1NjY0MjIxNjd9.i7sH-fObZOC6hUPFj3nQxTEU33iAdCycm9IlFpEL1kE";

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? token : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// Aquí en efecto se está realizando el montaje de React en el HTML.
// Se está montando App en el elemento HTML que tenga por id `root`
ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));
