import { Link, routes } from '@redwoodjs/router'

import Bcards from 'src/components/Bcard/Bcards'

export const QUERY = gql`
  query FindBcards {
    bcards {
      id
      netlify_id
      cell_number
      email
      name
      profession_id
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
