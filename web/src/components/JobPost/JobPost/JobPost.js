import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_JOB_POST_MUTATION = gql`
  mutation DeleteJobPostMutation($id: Int!) {
    deleteJobPost(id: $id) {
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

const JobPost = ({ jobPost }) => {
  const [deleteJobPost] = useMutation(DELETE_JOB_POST_MUTATION, {
    onCompleted: () => {
      toast.success('JobPost deleted')
      navigate(routes.jobPosts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete jobPost ' + id + '?')) {
      deleteJobPost({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            JobPost {jobPost.id} Detail
          </h2>
        </header>

        <table className="rw-table">
          <tbody>
            <tr>
              <th>Job id</th>

              <td>{jobPost.jobId}</td>
            </tr>
            <tr>
              <th>Job poster name</th>

              <td>{jobPost.jobPosterName}</td>
            </tr>
            <tr>
              <th>Title</th>

              <td>{jobPost.title}</td>
            </tr>
            <tr>
              <th>Body</th>

              <td>{jobPost.body}</td>
            </tr>
            <tr>
              <th>Created at</th>

              <td>{timeTag(jobPost.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav className="rw-button-group">
        <Link
          to={routes.editJobPost({ id: jobPost.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>

        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(jobPost.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default JobPost
