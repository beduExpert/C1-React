import React from 'react'

import App from './App'

test('Render without crash', () => {
  const component = shallow(<App />)
  expect(component).toMatchSnapshot()
})

test('Change input changes p', () => {
  const component = mount(<App />)

  // Testing initial state
  expect(component.find('p').equals(<p>Cámbiame...</p>)).toEqual(true)
  // Testing a change in the input
  component.find('input').simulate('change', {target:{value: "Hola Mundo"}})
  expect(component.find('p').equals(<p>Cámbiame...</p>)).toEqual(false)
  expect(component.find('p').equals(<p>Hola Mundo</p>)).toEqual(true)
})
