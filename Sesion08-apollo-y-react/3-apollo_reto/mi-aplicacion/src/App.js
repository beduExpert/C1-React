import React from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

import Print from './Print'

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function App(props) {
  const [data, setData] = React.useState({})
  const [query, setQuery] = React.useState('')

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
  }, [query])

  return (
    <>
      <input onChange={e => setQuery(e.target.value)} value={query} />
      <Print books={data.books || []} />
    </>
  )
}

export default App;
