import React from 'react'

import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";

const Footer = props => {
  return (
    <footer className="margin-top-lg">
      <ul>
        <li>Bedu Travels</li>
        <li>hola@bedutravels.com</li>
      </ul>
      <div className="social-media-container">
        <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Twitter" />
        <img src={twitter} alt="Instagram" />
      </div>
    </footer>
  );
}

export default Footer;