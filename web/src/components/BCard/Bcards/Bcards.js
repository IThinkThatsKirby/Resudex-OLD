import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Bcard/BcardsCell'

const DELETE_BCARD_MUTATION = gql`
  mutation DeleteBcardMutation($id: Int!) {
    deleteBcard(id: $id) {
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

const BcardsList = ({ bcards }) => {
  const [deleteBcard] = useMutation(DELETE_BCARD_MUTATION, {
    onCompleted: () => {
      toast.success('Bcard deleted')
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
    if (confirm('Are you sure you want to delete bcard ' + id + '?')) {
      deleteBcard({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Bcard id</th>

            <th>User id</th>

            <th>Profession id</th>

            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {bcards.map((bcard) => (
            <tr key={bcard.id}>
              <td>{truncate(bcard.bcard_id)}</td>

              <td>{truncate(bcard.user_id)}</td>

              <td>{truncate(bcard.profession_id)}</td>

              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.bcard({ id: bcard.id })}
                    title={'Show bcard ' + bcard.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>

                  <Link
                    to={routes.editBcard({ id: bcard.id })}
                    title={'Edit bcard ' + bcard.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    title={'Delete bcard ' + bcard.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(bcard.id)}
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

export default BcardsList
