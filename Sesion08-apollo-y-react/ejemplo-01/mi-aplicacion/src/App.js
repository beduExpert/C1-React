import React from 'react';

const query = `
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

class App extends React.Component {
  state = {
    data: {
      Post: {
        title: '',
        Comments: [],
        User: {
          name: '',
        },
      },
    },
  }

  async componentDidMount() {
    const raw = await this.getData('http://localhost:4000', {query})
    const { data } = await raw.json()

    this.setState({ data })
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
        <h1>GraphQL</h1>
        <Post data={this.state.data} />
      </div>
    )
  }
}

function Post(props) {
  const { Post } = props.data

  return (
    <>
      <h3>{`${Post.title} por ${Post.User.name}`}</h3>
      <div>
        <p>Comentarios:</p>
        {
          Post.Comments.map((e, i) => (
            <div key={i}>
              <p>{e.body}</p>
              <p>{e.date}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App;
