import React, { Component } from 'react'
import logo from "../assets/img/bedu_logo.png";

export default class Nav extends Component {
  render() {
    return (
      <nav className="menu_main" >
        <img id="bedu-logo" src={logo} alt="bedu logo" />
      </nav>
    );
  }
}
