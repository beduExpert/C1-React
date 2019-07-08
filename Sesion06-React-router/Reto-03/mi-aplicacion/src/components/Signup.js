import React from "react";

const Signup = props => (
  <section className="profile-container padding-top-lg">
    <div>
      <div className="margin-bottom-sm">
        <p className="title-font margin-bottom-lg margin-top-lg text-center">
          Registrate para obtener todos los beneficios de Bedu-Travles
        </p>
      </div>
      <div className="profile-info">
        <div className="profile-inputs">
          Nombre: <input type="text" />
          Apellido: <input type="text" />
          Correo Electrónico: <input type="email" />
          Número Teléfonico: <input type="number" />
          Fecha de Nacimiento: <input type="date" />
          Nacionalidad: <input type="text" />
          Password: <input type="password" />
          Confirma tu password: <input type="password" />
          <button
            className="button-tour margin-top-sm"
            style={{ alignSelf: "center", width: "50%" }}
            type="button"
            name="button"
          >
            Resgitratse
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Signup;
