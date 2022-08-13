import Bcard from 'src/components/Bcard/Bcard'

export const QUERY = gql`
  query FindBcardById($id: Int!) {
    bcard: bcard(id: $id) {
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

export const Empty = () => <div>Bcard not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ bcard }) => {
  return <Bcard bcard={bcard} />
}
