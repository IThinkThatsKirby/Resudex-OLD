import { Link, routes } from '@redwoodjs/router'

import Bcards from 'src/components/Bcard/Bcards'

export const QUERY = gql`
  query FindBcards {
    bcards {
      id
      user_id
      profession_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <>
      <div className="responsive center-align round yellow large-margin small-padding">
        No bcards yet.
      </div>
      <Link to={routes.newBcard()} className="button blue responsive">
        Create one?
      </Link>
    </>
  )
}

export const Failure = ({ error }) => (
  <div className="button">{error.message}</div>
)

export const Success = ({ bcards }) => {
  return <Bcards bcards={bcards} />
}
