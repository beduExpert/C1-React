import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/bedu_logo.png";

const Menu = props => {
  return (
    <nav className="menu_main" >
      <Link to="/">
        <img id="bedu-logo" src={logo} alt="bedu logo" />
      </Link>
      <div>
        <Link to="/login">LogIn</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Menu;