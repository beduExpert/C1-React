## Testing

Siempre cuando uno inicia un nuevo proyecto, se pregunta y qué debo testear,
para que sea óptimo mi camino por delante. En particual, en el testing es
complicado saber qué testear y qué no. Aquí veremos unas pequeñas guías para
saber por dónde empezar.

- Solo debe testerse código hecho por el proyecto, es decir, si uno usa una
  librería hecho por algún tercero, nosotros no escribiremos test para dicho
  código, ese debería existir ya en la librería y si es de nuestro interés,
  podemos revisar que dicho código está testeado y que pasa dichos tests.
- En el caso de proyectos que tienen un frontend como es el caso de los
  proyectos con React, quizás la mejor manera de testear es con los snapshots
  y complementarlos con tests de funcionalidad, como lo hemos visto; testeamos
  que se despliegue el componente y que además al cambiar la información del
  input, se despligue este cambio dónde lo esperamos.
- En algún punto también resulta interesante testear que las respuestas del API
  son las que esperamos, si bien esto puede parecer una contraindicación del
  primer punto aquí expuesto, resulta interesante, porque descartamos de
  manera inmediata (con el test) que nuestro problema no es por la información
  traída, sino en algún otro punto ya del proyecto.
