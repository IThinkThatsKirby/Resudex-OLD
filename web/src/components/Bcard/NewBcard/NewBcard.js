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
    <div className=" large-elevation">
      <header className="round fill small-margin">
        <h6 className="center-align">New business card form</h6>
      </header>

      <div className="padding border round">
        <BcardForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBcard
