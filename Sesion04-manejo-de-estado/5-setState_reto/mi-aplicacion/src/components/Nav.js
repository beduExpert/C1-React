import React from 'react'
import logo from "../assets/img/bedu_logo.png";

const Nav = props => {
  return (
    <nav className="menu_main" >
      <img id="bedu-logo" src={logo} alt="bedu logo" />
    </nav>
  );
}

export default Nav;