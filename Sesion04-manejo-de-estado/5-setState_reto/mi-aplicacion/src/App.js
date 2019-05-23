import React from 'react'

import './App.css'
import Character from './Character'

class App extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(r => r.json())
    .then(r => this.setState((state, props) => ({ data: r.results })))
  }

  render() {
    return (
      <div className="App">
        { this.state.data.map(d => {
          return (
            <Character
              key={d.id}
              image={d.image}
              name={d.name}
              specie={d.species}
            />
          )
        })}
      </div>
    )
  }
}

export default App;
