import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

// Estos componentes deberían estar en su propio archivo, pero para simplificar
// los pondemos aquí
const Dashboard = props => <p>Dashboard</p>
const CarritoDeCompras = props => <p>CarritoDeCompras</p>
const Menu = props =>
  <nav>
    <ul>
      <li>
        { // Esta no es la manera correcta de hacerlo
        }
        <a href="/">Inicio</a>
      </li>
      <li>
        { // Esta es la manera de usar Links (anchors) dentro de un router
          // usando el mismo API que el router provee
        }
        <Link to="/carrito">Carrito de compras</Link>
      </li>
    </ul>
  </nav>

function App(props) {
  return (
    <BrowserRouter>
      <Menu />
      <Route path="/" exact component={Dashboard} />
      <Route path="/carrito" component={CarritoDeCompras} />
    </BrowserRouter>
  )
}

export default App;
