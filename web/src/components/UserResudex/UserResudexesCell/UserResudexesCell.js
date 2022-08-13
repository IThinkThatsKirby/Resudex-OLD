import { Link, routes } from '@redwoodjs/router'

import UserResudexes from 'src/components/UserResudex/UserResudexes'

export const QUERY = gql`
  query FindUserResudexes($netlify_id: String!) {
    userResudexes(netlify_id: $netlify_id) {
      id
      bcard {
        cell_number
        email
        id
        name
        profession
        selfie
        specialization1
        specialization1exp
        specialization2
        specialization2exp
        specialization3
        specialization3exp
        spreference1
        spreference2
        spreference3
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userResudexes yet. '}

      <Link to={routes.newUserResudex()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userResudexes }) => {
  return <UserResudexes userResudexes={userResudexes} />
}
