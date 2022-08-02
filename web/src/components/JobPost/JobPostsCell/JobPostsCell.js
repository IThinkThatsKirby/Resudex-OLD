import { Link, routes } from '@redwoodjs/router'

import JobPosts from 'src/components/JobPost/JobPosts'

export const QUERY = gql`
  query FindJobPosts {
    jobPosts {
      jobId
      jobPosterName
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No jobPosts yet. '}

      <Link to={routes.newJobPost()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ jobPosts }) => {
  return <JobPosts jobPosts={jobPosts} />
}
