import { render } from '@redwoodjs/testing/web'

import GlobalLayout from './GlobalLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GlobalLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GlobalLayout />)
    }).not.toThrow()
  })
})
