import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import App from './App';
import Character from './Character'

const Route404 = (props) => (
  <Redirect to="/" />
)

const Root = (props) => (
  <Router>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/character/detail/:id" component={Character}/>
      <Route component={Route404} />
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
