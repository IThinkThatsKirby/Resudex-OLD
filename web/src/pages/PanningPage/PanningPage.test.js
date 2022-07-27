import { render } from '@redwoodjs/testing/web'

import PanningPage from './PanningPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PanningPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PanningPage />)
    }).not.toThrow()
  })
})
