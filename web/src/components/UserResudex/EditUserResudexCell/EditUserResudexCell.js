import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserResudexForm from 'src/components/UserResudex/UserResudexForm'

export const QUERY = gql`
  query EditUserResudexById($id: Int!) {
    userResudex: userResudex(id: $id) {
      id
      netlify_id
      bcard_id
    }
  }
`
const UPDATE_USER_RESUDEX_MUTATION = gql`
  mutation UpdateUserResudexMutation(
    $id: Int!
    $input: UpdateUserResudexInput!
  ) {
    updateUserResudex(id: $id, input: $input) {
      id
      netlify_id
      bcard_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userResudex }) => {
  const [updateUserResudex, { loading, error }] = useMutation(
    UPDATE_USER_RESUDEX_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserResudex updated')
        navigate(routes.userResudexes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateUserResudex({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit UserResudex {userResudex.id}
        </h2>
      </header>

      <div className="rw-segment-main">
        <UserResudexForm
          userResudex={userResudex}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
