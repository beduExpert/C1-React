import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Card from './Main/Card/Card';
import fakeData from "./db/data.json";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    // this.setState({
    //   data: fakeData
    // })
    this.setState((state, props) => ({ data: fakeData }))
    console.log('sate', this.state);
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
                    username={card.username}
                    email={card.email}
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
