## Componentes de tipo Clase

```sh
$ cd mi-aplicacion
$ npm start
```

Como podemos notar los componentes de clase tienen más métodos conforme se van
haciendo más robustos y los componentes funcionales quedan muy pequeños y
compactos; si hacemos una separación que permita tener un código mejor organizado, por
ejemplo a los componentes que se encargan de traer información y que por su
naturaleza suelen tener información dentro de sí mismos, suele llarmárseles
componentes `listos` (smart) porque justo hacen el manejo de la información. A
los componentes que suelen solo presentar la información se les denomina
componentes `tontos` (dummy). En ambos casos existe la posibilidad de que unos u
otros sean de tipo clase o funcionales, en este caso veremos un componente listo
de tipo clase y un componente tonto de tipo funcional

```js
// ...

class Padre extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      datos: {},
    }
  }

  componentDidMount() {
    // Esto no es real, sino un simple ejemplo
    this.obtenerInformacion(`https://google.com/`)
  }

  obtenerInformacion = async (url) => {
    const respuesta = await fetch(url).then(r => r.json())

    // Aquí guardamos la informacón en un lugar llamado estado para que podamos
    // compartirla con otros métodos de esta clase
    // Esto se verá a detalle en la siguiente clase
    this.setState({datos: respuesta.datos})
  }

  render() {
    const { nombre, edad } = this.state.datos

    return (
      <Hijo nombre={nombre} edad={edad} />
    )
  }
}

function Hijo(props) {
  return (
    <p>{props.nombre} tiene {props.edad} años.</p>
  )
}

// ...
```
