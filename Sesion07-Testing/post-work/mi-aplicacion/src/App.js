import React from 'react'

import './App.css'
import Character from './Character'

const URL = 'https://rickandmortyapi.com/api/character/'

function App(props) {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch(URL)
    .then(r => r.json())
    .then(r => setData(r.results))
  }, [])

  return (
    <div className="App">
      { data.map(d => {
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

export default App;
