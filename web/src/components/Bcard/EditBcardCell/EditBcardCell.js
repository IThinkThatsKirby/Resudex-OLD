import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BcardForm from 'src/components/Bcard/BcardForm'

export const QUERY = gql`
  query EditBcardById($id: Int!) {
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
const UPDATE_BCARD_MUTATION = gql`
  mutation UpdateBcardMutation($id: Int!, $input: UpdateBcardInput!) {
    updateBcard(id: $id, input: $input) {
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

      <div className="">
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
