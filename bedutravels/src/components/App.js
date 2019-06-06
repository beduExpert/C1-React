import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Footer from './Footer'
import Login from './Login'
import Home from './Home'
import Nav from './Nav'
import Signin from './Signin'
import Venues from './Venues'

const App = props => (
  <>
    <BrowserRouter>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signin" component={Signin} />
      <Route path="/venues" component={Venues} />
      <Footer />
    </BrowserRouter>
  </>
)

export default App
