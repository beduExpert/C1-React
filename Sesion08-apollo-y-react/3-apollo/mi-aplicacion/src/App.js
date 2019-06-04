import React from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: "http://localhost:4000"
});


function App(props) {
  const [data, setData] = React.useState({})
  React.useEffect(() => {
    client
    .query({
      query: gql`
        {
          books {
            title
            author
          }
        }
      `
    })
    .then(r => setData(r.data));
  }, [])

  const books = data.books && data.books.map((b, i) => {
    return <p key={i}>{b.title}</p>
  })

  return (
    <>
      {books}
    </>
  )
}

export default App;
