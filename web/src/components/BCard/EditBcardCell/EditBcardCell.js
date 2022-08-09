import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BcardForm from 'src/components/Bcard/BcardForm'

export const QUERY = gql`
  query EditBcardById($id: Int!) {
    bcard: bcard(id: $id) {
      bcard_id
      user_id
      profession_id
    }
  }
`
const UPDATE_BCARD_MUTATION = gql`
  mutation UpdateBcardMutation($id: Int!, $input: UpdateBcardInput!) {
    updateBcard(id: $id, input: $input) {
      bcard_id
      user_id
      profession_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ bcard }) => {
  const [updateBcard, { loading, error }] = useMutation(UPDATE_BCARD_MUTATION, {
    onCompleted: () => {
      toast.success('Bcard updated')
      navigate(routes.bcards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateBcard({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Bcard {bcard.id}
        </h2>
      </header>

      <div className="rw-segment-main">
        <BcardForm
          bcard={bcard}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
