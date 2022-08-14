import UserResudex from 'src/components/UserResudex/UserResudex'

import UserResudexesList from '../UserResudexes/UserResudexes'
export const QUERY = gql`
  query FindUserResudexById($id: Int!) {
    userResudex: userResudex(id: $id) {
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

export const Empty = () => <div>UserResudex not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userResudex }) => {
  return <UserResudexesList userResudex={userResudex} />
}
