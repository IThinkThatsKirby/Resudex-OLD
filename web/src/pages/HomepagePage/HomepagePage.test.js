import { render } from '@redwoodjs/testing/web'

import HomepagePage from './HomepagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomepagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomepagePage />)
    }).not.toThrow()
  })
})
