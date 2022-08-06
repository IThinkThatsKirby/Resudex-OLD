import { render } from '@redwoodjs/testing/web'

import ResudexPage from './ResudexPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ResudexPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResudexPage />)
    }).not.toThrow()
  })
})
