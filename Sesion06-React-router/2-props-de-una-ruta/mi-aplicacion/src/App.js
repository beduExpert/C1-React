import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

// Función que arroja un número semialeatorio entre el 1 y el 1000
const random = () => Math.floor(Math.random() * (1000 - 1)) + 1;

// Estos componentes deberían estar en su propio archivo, pero para simplificar
// los pondemos aquí
const Dashboard = props => {
  const randomNumbers = [
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
  ]

  return randomNumbers.map((e, i) => {
    return (
      <div key={i}>
        <Link to={`/carrito/${e}`}>Carro de compras # {e}</Link>
        <br />
      </div>
    )
  })
}
const CarritoDeCompras = props => {
  const r = random()
  const s = random()

  return (
    <p>Carrito de compras #{props.match.params.id} que podemos procesar ya para
      el pago <Link to={{pathname: `/orden/${r}`, amount: s}}>aquí</Link>.</p>
  )
}
const OrdenDeCompra = props => {
  // Aquí debemos de seleccionar si existe la información en la ruta, sino obtenerla
  const amount = props.location.amount || random()

  const [message, setMessage] = React.useState('Pagar')

  return (
    <>
      <p>
        Orden de compra #{props.match.params.id} que podemos procesar ya para el
          pago que es de ${amount}.00 pesos.
      </p>
      <button
        onClick={() => {
          setMessage('pagando...')
          setTimeout(() => props.history.push('/'), 800)
        }}
      >
          {message}
      </button>
    </>
  )
}
const Menu = props =>
  <nav>
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
    </ul>
  </nav>

function App(props) {
  return (
    <BrowserRouter>
      <Menu />
      <Route path="/" exact component={Dashboard} />
      <Route path="/carrito/:id" component={CarritoDeCompras} />
      <Route path="/orden/:id" component={OrdenDeCompra} />
    </BrowserRouter>
  )
}

export default App;
