import JobPost from 'src/components/JobPost/JobPost'

export const QUERY = gql`
  query FindJobPostById($id: Int!) {
    jobPost: jobPost(id: $id) {
      jobId
      jobPosterName
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>JobPost not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ jobPost }) => {
  return <JobPost jobPost={jobPost} />
}
