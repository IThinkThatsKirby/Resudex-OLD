import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BcardForm from 'src/components/Bcard/BcardForm'

const CREATE_BCARD_MUTATION = gql`
  mutation CreateBcardMutation($input: CreateBcardInput!) {
    createBcard(input: $input) {
      id
    }
  }
`

const NewBcard = () => {
  const [createBcard, { loading, error }] = useMutation(CREATE_BCARD_MUTATION, {
    onCompleted: () => {
      toast.success('Bcard created')
      navigate(routes.bcards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createBcard({ variables: { input } })
  }

  return (
    <div className="card border round">
      <header>
        <h3 className="center-align primary-text secondary round">
          Make your new business card !!
        </h3>
      </header>

      <div className="card">
        <BcardForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBcard
