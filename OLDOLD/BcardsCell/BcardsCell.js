import { Link, routes } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

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
      specialization1type
      specialization2type
      specialization3type
    }
  }
`
//use graphql playground to make your own query in a gql`` wraper
const QUERY_BY_NID = gql`
  query MyQuery {
    specializations {
      type
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
  console.log(useQuery(QUERY_BY_NID).data) // show cases how to use query
  return <Bcards bcards={bcards} />
}
