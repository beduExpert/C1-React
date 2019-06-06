import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/img/bedu_logo.png'

const Nav = props => (
  <nav className="menu_main">
    <Link to="/">
      <img id="bedu-logo" src={logo} alt="bedu logo" />
    </Link>
    <div>
      <Link to="/login">LogIn</Link>
      <Link to="/signin">SignIn</Link>
    </div>
  </nav>
)

export default Nav
