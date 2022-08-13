import { render } from '@redwoodjs/testing/web'

import FavBtn from './FavBtn'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FavBtn', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FavBtn />)
    }).not.toThrow()
  })
})
