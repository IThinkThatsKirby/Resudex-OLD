import humanize from 'humanize-string'
import { currentUser } from 'netlify-identity-widget'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import QUERY from 'src/components/Bcard/BcardsCell'

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

const Bcards = ({ bcards }, { userBcards }) => {
  // const cUserId = currentUser().id
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

  if ({ bcards }) {
    return (
      <div>
        {bcards.map((bcard) => (
          <div key={bcard.id}>
            <a className="loader">{bcard.name}</a>
          </div>

          /* <nav className="s2">
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
            </nav> */
        ))}
      </div>
    )
  }
  if (userBcards) {
    console.log(userBcards)
    return (
      <div>
        {userBcards.map((userbcard) => (
          <div key={userbcard.id}>
            <a className="loader">{userbcard.name}</a>
          </div>

          /* <nav className="s2">
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
            </nav> */
        ))}
      </div>
    )
  }
}
export default Bcards
