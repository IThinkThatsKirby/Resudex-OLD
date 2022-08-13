import { currentUser } from 'netlify-identity-widget'

import { Link, routes } from '@redwoodjs/router'

import Bcards from 'src/components/Bcard/Bcards'
// const cUser = currentUser().id

export const QUERY = gql`
  query userBcards($netlify_id: String) {
    userBcards(netlify_id: $netlify_id) {
      specialization1
      specialization1exp
      specialization2
      specialization2exp
      specialization3
      specialization3exp
      spreference1
      spreference2
      spreference3
      profession
      selfie
      name
      email
      cell_number
      id
    }
    bcards {
      id
    }
  }
`

export const Loading = () => {
  return (
    <>
      <div className="loader large"></div>
      <div className="loader large"></div>
      <div className="loader pink large"></div>
      <div className="loader large"></div>
      <div className="loader large"></div>
      <div className="loader large"></div>
      <div className="loader large"></div>
      <div className="loader red large"></div>
      <div className="loader black large"></div>
      <div className="loader large"></div>
      <div className="loader large"></div>
      <div className="loader large"></div>
    </>
  )
}

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No bcards yet. '}

      <Link to={routes.newBcard()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ bcards, userBcards }) => {
  return <Bcards bcards={bcards} userBcards={userBcards} />
}
