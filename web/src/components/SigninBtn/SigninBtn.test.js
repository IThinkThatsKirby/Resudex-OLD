import { render } from '@redwoodjs/testing/web'

import SigninBtn from './SigninBtn'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SigninBtn', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SigninBtn />)
    }).not.toThrow()
  })
})
