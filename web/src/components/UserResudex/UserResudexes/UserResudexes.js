import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/UserResudex/UserResudexesCell'

const DELETE_USER_RESUDEX_MUTATION = gql`
  mutation DeleteUserResudexMutation($id: Int!) {
    deleteUserResudex(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const UserResudexesList = ({ userResudexes }) => {
  const [deleteUserResudex] = useMutation(DELETE_USER_RESUDEX_MUTATION, {
    onCompleted: () => {
      toast.success('UserResudex deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete userResudex ' + id + '?')) {
      deleteUserResudex({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>

            <th>Netlify id</th>

            <th>Bcard id</th>

            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {userResudexes.map((userResudex) => (
            <tr key={userResudex.id}>
              <td>{truncate(userResudex.id)}</td>

              <td>{truncate(userResudex.netlify_id)}</td>

              <td>{truncate(userResudex.bcard_id)}</td>

              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userResudex({ id: userResudex.id })}
                    title={'Show userResudex ' + userResudex.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>

                  <Link
                    to={routes.editUserResudex({ id: userResudex.id })}
                    title={'Edit userResudex ' + userResudex.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    title={'Delete userResudex ' + userResudex.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userResudex.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserResudexesList
