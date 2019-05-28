import React from 'react'

import App from './App'

test('The component render without crash', () => {
  const component = shallow(<App />)

  expect(component).toMatchSnapshot()
})
