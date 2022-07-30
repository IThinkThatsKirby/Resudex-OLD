import { render } from '@redwoodjs/testing/web'

import SifterPage from './SifterPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SifterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SifterPage />)
    }).not.toThrow()
  })
})
