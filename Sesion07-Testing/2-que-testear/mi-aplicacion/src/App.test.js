import React from 'react'
import {mount} from 'enzyme'

import App from './App'

test('El botón del componente agregue uno', () => {
  const component = mount(<App />)

  component.find('button').simulate('click')
  expect(component.find('p').equals(<p>La cuenta es: 1</p>)).toEqual(true)
  component.unmount()
})
