import React from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

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
    const { data } = await this.getData()

    this.setState({ data })
  }

  getData = () => client
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
