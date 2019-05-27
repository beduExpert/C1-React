import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <footer className="Footer-component">
        <h5>
          <a href="mailto:mi@correo.com">Sigamos en contacto!</a>
        </h5>
        <h5>
          <a href="https://github.com/miUsuario">
            Esto es mi trabajo público
          </a>
        </h5>
        <h5>
          <a href="https://twitter.com/@miUsuario">Esto pienso</a>
        </h5>
      </footer>
    </>
  );
}
