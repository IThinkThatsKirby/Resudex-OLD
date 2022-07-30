import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/JobPost/JobPostsCell'

const DELETE_JOB_POST_MUTATION = gql`
  mutation DeleteJobPostMutation($id: Int!) {
    deleteJobPost(id: $id) {
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

const JobPostsList = ({ jobPosts }) => {
  const [deleteJobPost] = useMutation(DELETE_JOB_POST_MUTATION, {
    onCompleted: () => {
      toast.success('JobPost deleted')
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
    if (confirm('Are you sure you want to delete jobPost ' + id + '?')) {
      deleteJobPost({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Job id</th>

            <th>Job poster name</th>

            <th>Title</th>

            <th>Body</th>

            <th>Created at</th>

            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {jobPosts.map((jobPost) => (
            <tr key={jobPost.id}>
              <td>{truncate(jobPost.jobId)}</td>

              <td>{truncate(jobPost.jobPosterName)}</td>

              <td>{truncate(jobPost.title)}</td>

              <td>{truncate(jobPost.body)}</td>

              <td>{timeTag(jobPost.createdAt)}</td>

              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.jobPost({ id: jobPost.id })}
                    title={'Show jobPost ' + jobPost.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>

                  <Link
                    to={routes.editJobPost({ id: jobPost.id })}
                    title={'Edit jobPost ' + jobPost.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    title={'Delete jobPost ' + jobPost.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(jobPost.id)}
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

export default JobPostsList
