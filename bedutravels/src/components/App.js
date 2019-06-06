import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Footer from './Footer'
import Login from './Login'
import Home from './Home'
import Nav from './Nav'
import Signin from './Signin'
import Venues from './Venues'

import { URL } from '../constants'

const App = props => {
  const [state, setState] = React.useState([])
  React.useEffect(() => {
    fetch(URL)
    .then(r => r.json())
    .then(r => setState(r.data))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Route path="/" component={Nav} />
        <Route
          path="/"
          exact
          render={props => <Home data={state} {...props} />}
        />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
        <Route
          path="/venues"
          render={props => <Venues data={state} {...props} />}
        />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
