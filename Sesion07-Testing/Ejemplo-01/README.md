## Testing

El testing es importante porque aplicado con una técnica conocida como Test
Driven Development resulta muy útil para establecer comportamiento en la
programación que minimamente debe de cumplir.

Por ejemplo, si queremos que un input solo reciba números de teléfonos de
México, lo que ese input debe de cumplir es:

- Solo recibir números
- De las ladas disponibles en el país solo debe de soportar esas
- Debe de tener un número determinado de dígitos un número en México

Con este `spec` es más fácil desarrollar un componente que maneje esto como debe
de ser.

Así si el desarrollo es manejado por primero escribir el test, y luego crear la
implementación que cumpla dicho test, permite que lo testeado se comporte
correctamente.

Para escribir Test en React, existe Jest que es una herramienta también creada
por Facebook, que a su vez se complementa bien con una herramienta creada por
AirBnB que se llama Enzyme

Para iniciar a hacer testing si boostrapeamos una aplicación con Create React
App por defecto ya trae instalado lo necesario para empezar con ello, solo hace
falta instalar `react-test-renderer` para iniciar con los test más sencillos que
verifican que el componente se ve como uno espera que se vea (al menos en el
código)

```sh
$ npm install --save-dev react-test-renderer
$ npm test # En una consola distinta de dónde está corriendo npm start
```

ahora a escribir nuestro primer test:

```js
// Mi.test.js
import React from 'react'
import renderer from 'react-test-renderer'

test('El componente se muestra', () => {
  const component = renderer.create(
    <MiComponente />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
```

La primera vez que corremos el comando creará el snapshot, si modificamos ahora
el componente veremos que el test no pasará porque el snapshot y la modificación
ya no corresponden.

Para actualizar esto, solo hace falta con borrar el snapshot desactualizado para
que se vuelva a generar y el test sea exitoso.

Hasta aquí el test es útil, pero cobra mayor relevancia cuando se combina con
una librería que permita hacer mejores cosas `Enzyme` es una de ellas.
Necesitamos agregarla al proyecto también, así como el adaptador para el
Framework/Librería que estamos usando (React 16) en nuestro caso:

```sh
$ npm install --save-dev enzyme enzyme-adapter-react-16
$ npm test # En una consola distinta de dónde está corriendo npm start
```

Ahora usaremos `Enzyme` para testear

Necesitamos crear el archivo `src/setupTests.js` para poder configurar el
adaptador para React

```js
// src/setupTests.js
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

```

Y ya podemos escribir el archivo que testeará

```js
// Mi.test.js
import React from 'react'
import {mount} from 'enzyme'

test('El botón del componente agregue uno', () => {
  const component = mount(<App />)

  component.find('button').simulate('click')
  expect(component.find('p').equals(<p>La cuenta es: 1</p>)).toEqual(true)
  component.unmount()
})
```
