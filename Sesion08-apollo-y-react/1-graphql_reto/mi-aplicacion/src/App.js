import React from 'react';

const query = `
{
  status
}
`

class App extends React.Component {
  state = {
    status: undefined,
  }

  async componentDidMount() {
    const raw = await this.getData('https://bedutravels.coderdiaz.me/graphql', {query})
    const { data: { status }} = await raw.json()

    this.setState({ status })
  }

  getData = (url, query) => fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })

  render() {
    return (
      <div>
        <h1>{this.state.status}</h1>
      </div>
    )
  }
}

export default App;
