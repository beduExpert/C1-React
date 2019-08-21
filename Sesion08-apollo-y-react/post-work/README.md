# Post work: Router para manejar vistas de personajes

Bienvenido al post work te felicitamos por llegar a este nivel de la sesión, en
esta sección reforzaremos tu conocimiento de los ejercicios que realizaste en la
sesión.

## Instrucciones

- Del reto 02, crea una vista dónde puedas consumir los Tours que están dados de
  alta que consumirás a través de la siguiente query:

  ```sh
  {
    tours {
      _id
      title
      duration
    }
  }
  ```
  Recuerda que necesitas enviar el token en los headers de la petición para que
  puedas tener acceso a los Tours:;

  ```sh
  "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDVkYjQ5Nzk3NmVhZTAwMTczNmNjMGEiLCJpYXQiOjE1NjY0MjIxNjd9.i7sH-fObZOC6hUPFj3nQxTEU33iAdCycm9IlFpEL1kE"
  ```

  Ese token es válido, así que puedes usar ese.
