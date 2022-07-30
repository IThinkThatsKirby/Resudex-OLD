import {
  jobPosts,
  jobPost,
  createJobPost,
  updateJobPost,
  deleteJobPost,
} from './jobPosts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobPosts', () => {
  scenario('returns all jobPosts', async (scenario) => {
    const result = await jobPosts()

    expect(result.length).toEqual(Object.keys(scenario.jobPost).length)
  })

  scenario('returns a single jobPost', async (scenario) => {
    const result = await jobPost({ id: scenario.jobPost.one.id })

    expect(result).toEqual(scenario.jobPost.one)
  })

  scenario('creates a jobPost', async () => {
    const result = await createJobPost({
      input: { title: 'String', body: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a jobPost', async (scenario) => {
    const original = await jobPost({ id: scenario.jobPost.one.id })
    const result = await updateJobPost({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a jobPost', async (scenario) => {
    const original = await deleteJobPost({ id: scenario.jobPost.one.id })
    const result = await jobPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
