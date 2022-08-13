import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FavBtn from 'src/components/FavBtn/FavBtn'

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
  console.log(bcard)
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
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Bcard {bcard.id} Detail
            <FavBtn />
          </h2>
        </header>

        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>

              <td>{bcard.id}</td>
            </tr>
            <tr>
              <th>Selfie</th>

              <td>{bcard.selfie}</td>
            </tr>
            <tr>
              <th>Netlify id</th>

              <td>{bcard.netlify_id}</td>
            </tr>
            <tr>
              <th>Name</th>

              <td>{bcard.name}</td>
            </tr>
            <tr>
              <th>Cell number</th>

              <td>{bcard.cell_number}</td>
            </tr>
            <tr>
              <th>Email</th>

              <td>{bcard.email}</td>
            </tr>
            <tr>
              <th>Was updated</th>

              <td>{checkboxInputTag(bcard.was_updated)}</td>
            </tr>
            <tr>
              <th>Profession</th>

              <td>{bcard.profession}</td>
            </tr>
            <tr>
              <th>Specialization1</th>

              <td>{bcard.specialization1}</td>
            </tr>
            <tr>
              <th>Specialization1exp</th>

              <td>{bcard.specialization1exp}</td>
            </tr>
            <tr>
              <th>Spreference1</th>

              <td>{bcard.spreference1}</td>
            </tr>
            <tr>
              <th>Specialization2</th>

              <td>{bcard.specialization2}</td>
            </tr>
            <tr>
              <th>Specialization2exp</th>

              <td>{bcard.specialization2exp}</td>
            </tr>
            <tr>
              <th>Spreference2</th>

              <td>{bcard.spreference2}</td>
            </tr>
            <tr>
              <th>Specialization3</th>

              <td>{bcard.specialization3}</td>
            </tr>
            <tr>
              <th>Specialization3exp</th>

              <td>{bcard.specialization3exp}</td>
            </tr>
            <tr>
              <th>Spreference3</th>

              <td>{bcard.spreference3}</td>
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
    </>
  )
}

export default Bcard
