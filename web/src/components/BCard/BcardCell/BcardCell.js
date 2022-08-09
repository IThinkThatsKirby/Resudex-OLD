import Bcard from 'src/components/Bcard/Bcard'

export const QUERY = gql`
  query FindBcardById($id: Int!) {
    bcard: bcard(id: $id) {
      id
      user_id
      profession_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div className="button">Bcard not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ bcard }) => {
  return <Bcard bcard={bcard} />
}
