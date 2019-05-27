import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Card from './Main/Card/Card';

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(r => r.json())
      .then(r => this.setState((state, props) => ({ data: r.results })));
    }
    
    render() {
      console.log("data: ", this.state.data);
      return (
        <>
          <Header />
          <Main>
            {
              this.state.data.map(card => {
                return (
                  <Card
                    key={card.id}
                    image={card.image}
                    name={card.name}
                    specie={card.specie}
                  />
                );
              })
            }
          </Main>
          <Footer />
        </>
      );
  }
}

export default App;
