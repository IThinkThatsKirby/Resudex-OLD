import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import JobPostForm from 'src/components/JobPost/JobPostForm'

export const QUERY = gql`
  query EditJobPostById($id: Int!) {
    jobPost: jobPost(id: $id) {
      jobId
      jobPosterName
      title
      body
      createdAt
    }
  }
`
const UPDATE_JOB_POST_MUTATION = gql`
  mutation UpdateJobPostMutation($id: Int!, $input: UpdateJobPostInput!) {
    updateJobPost(id: $id, input: $input) {
      jobId
      jobPosterName
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ jobPost }) => {
  const [updateJobPost, { loading, error }] = useMutation(
    UPDATE_JOB_POST_MUTATION,
    {
      onCompleted: () => {
        toast.success('JobPost updated')
        navigate(routes.jobPosts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { jobId: parseInt(input.jobId) })
    updateJobPost({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit JobPost {jobPost.id}
        </h2>
      </header>

      <div className="rw-segment-main">
        <JobPostForm
          jobPost={jobPost}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
