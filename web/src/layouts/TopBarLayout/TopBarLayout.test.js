import { render } from '@redwoodjs/testing/web'

import TopBarLayout from './TopBarLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TopBarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopBarLayout />)
    }).not.toThrow()
  })
})
