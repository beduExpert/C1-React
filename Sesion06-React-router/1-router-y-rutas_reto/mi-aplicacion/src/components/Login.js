import React from "react";

import "../destinos.css";
import "../profile.css";

const Login = props => (
  <section
    className="profile-container padding-top-lg"
    style={{ height: "-webkit-fill-available" }}
  >
    <div>
      <div className="margin-bottom-sm">
        <p className="title-font margin-bottom-lg margin-top-lg text-center">
          Recupera tu contraseña
        </p>
      </div>
      <div className="profile-info">
        <div className="profile-inputs">
          Nuevo Password: <input type="password" />
          Confirma tu password: <input type="password" />
          <button
            className="button-tour margin-top-sm"
            style={{ alignSelf: "center", width: "50%" }}
            type="button"
            name="button"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Login;
