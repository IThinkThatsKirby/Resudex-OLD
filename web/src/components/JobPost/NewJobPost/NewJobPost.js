import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import JobPostForm from 'src/components/JobPost/JobPostForm'

const CREATE_JOB_POST_MUTATION = gql`
  mutation CreateJobPostMutation($input: CreateJobPostInput!) {
    createJobPost(input: $input) {
      id
    }
  }
`

const NewJobPost = () => {
  const [createJobPost, { loading, error }] = useMutation(
    CREATE_JOB_POST_MUTATION,
    {
      onCompleted: () => {
        toast.success('JobPost created')
        navigate(routes.jobPosts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { jobId: parseInt(input.jobId) })
    createJobPost({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New JobPost</h2>
      </header>

      <div className="rw-segment-main">
        <JobPostForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewJobPost
