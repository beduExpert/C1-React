## Apollo y React (reto)

Del Ejemplo 02 en la Sesión 6, utiliza la siguiente liga:

`https://bedutravels.coderdiaz.me/graphql`

para poder registrar un usuario nuevo necesita el siguiente query:

```sh
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
```

con las siguientes variables:

```sh
{
  "input": {
    "type":"",
    "name": "{Aquí tu nombre}",
    "lastName": "{Aquí tu apellido}",
    "email": "{Aquí tu correo electrónico}",
    "password": "1234567890"
  }
}
```

cambiando de acuerdo a tu nombre, apellido y correo electrónico.

Eso te responderá algo de la siguiente manera:

```sh
{
  "data": {
    "signup": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDU0OTc4YzYwOGQ0ODAwMTc1ZWFiMzEiLCJpYXQiOjE1NjU4MjQ5MDh9.B9XzwNKv9xxgGmNlA2BdGQRVAfVIqzLaqaKiVXmIeEI",
      "user": {
        "name": "Leopoldo",
        "lastName": "Caballero",
        "email": "no@spam.com"
      }
    }
  }
}
```

imprime el token en consola y avisa mediante un alert que el token está en la
consola.

En la consola debería de verse algo así:

```sh
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDU0OGNhMjYwOGQ0ODAwMTc1ZWFiMzAiLCJpYXQiOjE1NjU4MjIxMTR9.ykdguB5A9Pz5OE_85kElMgQOdlJdE5E6B_UVglkcvG4
```

