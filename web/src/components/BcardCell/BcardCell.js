export const QUERY = gql`
  query FindBcardQuery($id: Int!) {
    bcard: bcard(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ bcard }) => {
  return <div>{JSON.stringify(bcard)}</div>
}
