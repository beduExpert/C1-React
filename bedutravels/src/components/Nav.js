import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/img/bedu_logo.png'

const routesToHideLinks = [
  '/login',
  '/signin',
]

const styles = {
  justifyContent: 'center',
}

const Nav = props => {
  const hide = !routesToHideLinks.includes(props.location.pathname)

  return (
    <nav className="menu_main" style={hide ? null : styles}>
      <Link to="/">
        <img id="bedu-logo" src={logo} alt="bedu logo" />
      </Link>
      {
        hide
        ? <div>
            <Link to="/login">LogIn</Link>
            <Link to="/signin">SignIn</Link>
          </div>
        : null
      }
    </nav>
  )
}

export default Nav
