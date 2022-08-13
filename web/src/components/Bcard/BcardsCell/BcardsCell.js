import { Link, routes } from '@redwoodjs/router'

import Bcards from 'src/components/Bcard/Bcards'

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

export const Loading = () => <div>Loading...</div>

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

export const Success = ({ bcards }) => {
  return <Bcards bcards={bcards} />
}
