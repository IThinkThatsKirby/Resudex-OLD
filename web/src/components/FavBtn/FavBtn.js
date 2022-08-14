import { currentUser } from 'netlify-identity-widget'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
const CREATE_USER_RESUDEX_MUTATION = gql`
  mutation CreateUserResudexMutation($input: CreateUserResudexInput!) {
    createUserResudex(input: $input) {
      id
    }
  }
`
const FavBtn = (data) => {
  const [createUserResudex, { loading, error }] = useMutation(
    CREATE_USER_RESUDEX_MUTATION,
    {
      onCompleted: () => {
        alert('Sucess!!')
        toast.success('UserResudex created')
        navigate(routes.userResudexes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  function create(input) {
    createUserResudex({ variables: { input } })
  }
  return (
    <button onClick={() => create(data)} className="pink icon round">
      Save to your Resudex?
    </button>
  )
}

export default FavBtn
