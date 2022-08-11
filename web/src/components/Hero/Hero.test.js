import { render } from '@redwoodjs/testing/web'

import Hero from './Hero'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Hero', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Hero />)
    }).not.toThrow()
  })
})
