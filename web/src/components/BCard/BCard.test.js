import { render } from '@redwoodjs/testing/web'

import BCard from './BCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BCard />)
    }).not.toThrow()
  })
})
