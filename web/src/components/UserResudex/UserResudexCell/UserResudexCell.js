import UserResudex from 'src/components/UserResudex/UserResudex'

export const QUERY = gql`
  query FindUserResudexById($id: Int!) {
    userResudex: userResudex(id: $id) {
      id
      netlify_id
      bcard_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserResudex not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userResudex }) => {
  return <UserResudex userResudex={userResudex} />
}
