import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY, userQUERY } from 'src/components/Bcard/BcardsCell'

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
    <div className="article responsive">
      <table className="border no-space center-align">
        <thead>
          <tr>
            <th>Id</th>

            <th>Selfie</th>

            <th>Netlify id</th>

            <th>Name</th>

            <th>Cell number</th>

            <th>Email</th>

            <th>Was updated</th>

            <th>Profession</th>

            <th>Specialization1</th>

            <th>Specialization1exp</th>

            <th>Spreference1</th>

            <th>Specialization2</th>

            <th>Specialization2exp</th>

            <th>Spreference2</th>

            <th>Specialization3</th>

            <th>Specialization3exp</th>

            <th>Spreference3</th>

            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {bcards.map((bcard) => (
            <tr key={bcard.id}>
              <td>{truncate(bcard.id)}</td>

              <td>{truncate(bcard.selfie)}</td>

              <td>{truncate(bcard.netlify_id)}</td>

              <td>{truncate(bcard.name)}</td>

              <td>{truncate(bcard.cell_number)}</td>

              <td>{truncate(bcard.email)}</td>

              <td>{checkboxInputTag(bcard.was_updated)}</td>

              <td>{truncate(bcard.profession)}</td>

              <td>{truncate(bcard.specialization1)}</td>

              <td>{truncate(bcard.specialization1exp)}</td>

              <td>{truncate(bcard.spreference1)}</td>

              <td>{truncate(bcard.specialization2)}</td>

              <td>{truncate(bcard.specialization2exp)}</td>

              <td>{truncate(bcard.spreference2)}</td>

              <td>{truncate(bcard.specialization3)}</td>

              <td>{truncate(bcard.specialization3exp)}</td>

              <td>{truncate(bcard.spreference3)}</td>

              <td>
                <nav className="card">
                  <Link
                    to={routes.bcard({ id: bcard.id })}
                    title={'Show bcard ' + bcard.id + ' detail'}
                    className="border"
                  >
                    Show
                  </Link>

                  <Link
                    to={routes.editBcard({ id: bcard.id })}
                    title={'Edit bcard ' + bcard.id}
                    className=""
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    title={'Delete bcard ' + bcard.id}
                    className="border"
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
