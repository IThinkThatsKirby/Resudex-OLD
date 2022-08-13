import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_USER_RESUDEX_MUTATION = gql`
  mutation DeleteUserResudexMutation($id: Int!) {
    deleteUserResudex(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const UserResudex = ({ userResudex }) => {
  const [deleteUserResudex] = useMutation(DELETE_USER_RESUDEX_MUTATION, {
    onCompleted: () => {
      toast.success('UserResudex deleted')
      navigate(routes.userResudexes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete userResudex ' + id + '?')) {
      deleteUserResudex({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserResudex {userResudex.id} Detail
          </h2>
        </header>

        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>

              <td>{userResudex.id}</td>
            </tr>
            <tr>
              <th>Netlify id</th>

              <td>{userResudex.netlify_id}</td>
            </tr>
            <tr>
              <th>Bcard id</th>

              <td>{userResudex.bcard_id}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav className="rw-button-group">
        <Link
          to={routes.editUserResudex({ id: userResudex.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>

        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userResudex.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserResudex
