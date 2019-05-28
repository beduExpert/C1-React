import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Display from './Display'
import Input from './Input'
import Menu from './Menu'

const Root = props => <p>Bienvenido, aquí podrás agregar mensajes que persistirán
  en la aplicación mientras no recargues la página</p>

function App(props) {
  const [messages, storeMessage] = React.useState([])

  return (
    <BrowserRouter>
      <Menu />
      <Route path="/" exact component={Root} />
      <Route
        path="/display"
        render={
          props =>
            <Display
              {...props}
              messages={messages}
            />
        }
      />
      <Route
        path="/input"
        render={
          props =>
            <Input
              {...props}
              storeMessage={message => storeMessage(messages.concat(message))}
            />
        }
      />
    </BrowserRouter>
  )
}

export default App;
