import React from "react";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const signup = gql`
mutation ($input: InputSignup!) {
  signup(input: $input) {
    token
    user {
      name
      lastName
      email
    }
  }
}
`;

const useHandleForm = callback => {
  const [inputs, setInputs] = React.useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordC: '',
  });

  const [addTodo] = useMutation(signup);

  const handleSubmit = async e => {
    if (e) e.preventDefault();

    const {
      name, lastName, email, password, passwordC
    } = inputs;

    if (password === passwordC) {
      const { data } = await addTodo({ variables: {
        input: {
          type: 'admin',
          name,
          lastName,
          email,
          password,
        }
      }})

      if (data && data.signup && data.signup.token) {
        console.log(data.signup.token)
        alert('Tu token está en la consola del navegador')
      }
    }


    if (typeof callback === 'function') callback();
  }

  const handleChange = e => {
    e.persist()
    const { target: { name, value }} = e;
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  return {
    handleSubmit,
    handleChange,
    inputs
  }
}

const Signup = props => {
  const { inputs, handleChange, handleSubmit } = useHandleForm();

  return (
    <section className="profile-container padding-top-lg">
      <form onSubmit={handleSubmit}>
        <div className="margin-bottom-sm">
          <p className="title-font margin-bottom-lg margin-top-lg text-center">
              Registrate para obtener todos los beneficios de Bedu-Travles
          </p>
        </div>
        <div className="profile-info">
          <div className="profile-inputs">
            Nombre: <input type="text" name="name" onChange={handleChange} value={inputs.name} />
            Apellido: <input type="text" name="lastName" onChange={handleChange} value={inputs.lastName} />
            Correo Electrónico: <input type="email" name="email" onChange={handleChange} value={inputs.email} />
            Número Teléfonico: <input type="number" disabled />
            Fecha de Nacimiento: <input type="date" disabled />
            Nacionalidad: <input type="text" disabled />
            Password: <input type="password" name="password" onChange={handleChange} value={inputs.password} />
            Confirma tu password: <input type="password" name="passwordC" onChange={handleChange} value={inputs.passwordC} />
            <button
              className="button-tour margin-top-sm"
              style={{ alignSelf: "center", width: "50%" }}
              type="submit"
              name="button"
              >
                Resgitratse
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Signup;
