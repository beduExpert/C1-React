import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

function Menu(props) {
  return (
    <nav className="Menu">
      <ul>
        <li>
          <Link to="/display">Resultados</Link>
        </li>
        <li>
          <Link to="/input">Agregar</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
