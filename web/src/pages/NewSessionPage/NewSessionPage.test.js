import { render } from '@redwoodjs/testing/web'

import NewSessionPage from './NewSessionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewSessionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewSessionPage />)
    }).not.toThrow()
  })
})
