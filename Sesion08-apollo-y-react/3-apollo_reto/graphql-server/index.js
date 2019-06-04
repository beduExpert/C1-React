const { ApolloServer, gql } = require('apollo-server');

// La información que estará disponible via GraphQL, debería ser traída via un
// servidor o via base de datos
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// Tipos necesarios para que GraphQL sepa como tratar la información
const typeDefs = gql`
  # Comentario inician con #

  # Tipo "Book"
  type Book {
    title: String
    author: String
  }

  # El tipo "Query" es la raíz de todos las consultas
  type Query {
    books: [Book]
  }
`;

// Los `resolvers` es la técnica para traer los tipos en el Schema
const resolvers = {
  Query: {
    books: () => books,
  },
};

// La versión más simple de un servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// El servidor se pone a la escucha
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
