import React from 'react'

import Hero from './Hero'
import Main from './Main'

const Home = props => (
  <>
    <Hero />
    <Main {...props} />
  </>
)

export default Home
