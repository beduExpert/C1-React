import React from 'react'

import Character from './Character'

test('Component renders without crash', () => {
  const component = shallow(<Character />)

  expect(component).toMatchSnapshot()
})
