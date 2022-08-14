import { render } from '@redwoodjs/testing/web'

import UserBcards from './UserBcards'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserBcards', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserBcards />)
    }).not.toThrow()
  })
})
