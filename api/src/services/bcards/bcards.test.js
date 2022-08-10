import { bcards, bcard, createBcard, updateBcard, deleteBcard } from './bcards'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('bcards', () => {
  scenario('returns all bcards', async (scenario) => {
    const result = await bcards()

    expect(result.length).toEqual(Object.keys(scenario.bcard).length)
  })

  scenario('returns a single bcard', async (scenario) => {
    const result = await bcard({ id: scenario.bcard.one.id })

    expect(result).toEqual(scenario.bcard.one)
  })

  scenario('creates a bcard', async (scenario) => {
    const result = await createBcard({
      input: {
        netlify_id: 3188541,
        name: 'String',
        profession_id: scenario.bcard.two.profession_id,
      },
    })

    expect(result.netlify_id).toEqual(3188541)
    expect(result.name).toEqual('String')
    expect(result.profession_id).toEqual(scenario.bcard.two.profession_id)
  })

  scenario('updates a bcard', async (scenario) => {
    const original = await bcard({ id: scenario.bcard.one.id })
    const result = await updateBcard({
      id: original.id,
      input: { netlify_id: 6818047 },
    })

    expect(result.netlify_id).toEqual(6818047)
  })

  scenario('deletes a bcard', async (scenario) => {
    const original = await deleteBcard({ id: scenario.bcard.one.id })
    const result = await bcard({ id: original.id })

    expect(result).toEqual(null)
  })
})
