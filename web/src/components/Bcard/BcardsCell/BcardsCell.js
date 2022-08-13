import { Link, routes } from '@redwoodjs/router'

import { UserBcardsList } from 'src/components/Bcard/Bcards'

export const QUERY = gql`
  query FindBcards {
    bcards {
      id
      selfie
      netlify_id
      name
      cell_number
      email
      was_updated
      profession
      specialization1
      specialization1exp
      spreference1
      specialization2
      specialization2exp
      spreference2
      specialization3
      specialization3exp
      spreference3
    }
  }
`

export const userQUERY = gql`
  query userBcards($netlify_id: String!) {
    userBcards(netlify_id: "32") {
      id
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

export const Success = ({ userBcards }) => {
  return <UserBcardsList userBcards={userBcards} />
}
