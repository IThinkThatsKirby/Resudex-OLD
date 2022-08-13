import {
  userResudexes,
  userResudex,
  createUserResudex,
  updateUserResudex,
  deleteUserResudex,
} from './userResudexes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userResudexes', () => {
  scenario('returns all userResudexes', async (scenario) => {
    const result = await userResudexes()

    expect(result.length).toEqual(Object.keys(scenario.userResudex).length)
  })

  scenario('returns a single userResudex', async (scenario) => {
    const result = await userResudex({ id: scenario.userResudex.one.id })

    expect(result).toEqual(scenario.userResudex.one)
  })

  scenario('creates a userResudex', async () => {
    const result = await createUserResudex({
      input: { netlify_id: 'String' },
    })

    expect(result.netlify_id).toEqual('String')
  })

  scenario('updates a userResudex', async (scenario) => {
    const original = await userResudex({ id: scenario.userResudex.one.id })
    const result = await updateUserResudex({
      id: original.id,
      input: { netlify_id: 'String2' },
    })

    expect(result.netlify_id).toEqual('String2')
  })

  scenario('deletes a userResudex', async (scenario) => {
    const original = await deleteUserResudex({
      id: scenario.userResudex.one.id,
    })

    const result = await userResudex({ id: original.id })

    expect(result).toEqual(null)
  })
})
