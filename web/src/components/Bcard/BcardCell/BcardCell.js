import Bcard from 'src/components/Bcard/Bcard'

export const QUERY = gql`
  query FindBcardById($id: Int!) {
    bcard: bcard(id: $id) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Bcard not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ bcard }) => {
  return <Bcard bcard={bcard} />
}
