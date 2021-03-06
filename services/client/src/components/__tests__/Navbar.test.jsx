import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter as Router } from 'react-router-dom'
import toJson from 'enzyme-to-json'

import NavBar from '../NavBar'

const title = 'Hello World'

test('NavBar renders properly', () => {
  const wrapper = shallow(<NavBar title={title} />)
  const element = wrapper.find('strong')
  expect(element.length).toBe(1)
  expect(element.get(0).props.children).toBe(title)
})

test('NavBar renders a snapshot properly', () => {
  const tree = shallow(
      <Router location='/'>
        <NavBar title={title} />
      </Router>
    )
  expect(toJson(tree)).toMatchSnapshot()
})
