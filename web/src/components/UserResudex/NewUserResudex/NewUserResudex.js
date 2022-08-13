import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserResudexForm from 'src/components/UserResudex/UserResudexForm'

const CREATE_USER_RESUDEX_MUTATION = gql`
  mutation CreateUserResudexMutation($input: CreateUserResudexInput!) {
    createUserResudex(input: $input) {
      id
    }
  }
`

const NewUserResudex = () => {
  const [createUserResudex, { loading, error }] = useMutation(
    CREATE_USER_RESUDEX_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserResudex created')
        navigate(routes.userResudexes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createUserResudex({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UserResudex</h2>
      </header>

      <div className="rw-segment-main">
        <UserResudexForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUserResudex
