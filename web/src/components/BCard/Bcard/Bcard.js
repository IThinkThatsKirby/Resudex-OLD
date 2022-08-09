import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_BCARD_MUTATION = gql`
  mutation DeleteBcardMutation($id: Int!) {
    deleteBcard(id: $id) {
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

const Bcard = ({ bcard }) => {
  const [deleteBcard] = useMutation(DELETE_BCARD_MUTATION, {
    onCompleted: () => {
      toast.success('Bcard deleted')
      navigate(routes.bcards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bcard ' + id + '?')) {
      deleteBcard({ variables: { id } })
    }
  }

  return (
    <>
      <article className="responsive">
        <div className="rw-segment">
          <header className="rw-segment-header">
            <h2 className="rw-heading rw-heading-secondary">
              Bcard {bcard.id} Detail
            </h2>
          </header>
          <table className="rw-table">
            <tbody>
              <tr>
                <th>Bcard id</th>
                <td>{bcard.bcard_id}</td>
              </tr>
              <tr>
                <th>User id</th>
                <td>{bcard.user_id}</td>
              </tr>
              <tr>
                <th>Profession id</th>
                <td>{bcard.profession_id}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav className="rw-button-group">
          <Link
            to={routes.editBcard({ id: bcard.id })}
            className="rw-button rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            className="rw-button rw-button-red"
            onClick={() => onDeleteClick(bcard.id)}
          >
            Delete
          </button>
        </nav>
      </article>
    </>
  )
}

export default Bcard
