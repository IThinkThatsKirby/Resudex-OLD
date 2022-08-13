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

  scenario('creates a bcard', async () => {
    const result = await createBcard({
      input: {
        selfie: 'String',
        netlify_id: 'String',
        name: 'String',
        profession: 'String',
        specialization1: 'String',
        specialization1exp: 5789536,
      },
    })

    expect(result.selfie).toEqual('String')
    expect(result.netlify_id).toEqual('String')
    expect(result.name).toEqual('String')
    expect(result.profession).toEqual('String')
    expect(result.specialization1).toEqual('String')
    expect(result.specialization1exp).toEqual(5789536)
  })

  scenario('updates a bcard', async (scenario) => {
    const original = await bcard({ id: scenario.bcard.one.id })
    const result = await updateBcard({
      id: original.id,
      input: { selfie: 'String2' },
    })

    expect(result.selfie).toEqual('String2')
  })

  scenario('deletes a bcard', async (scenario) => {
    const original = await deleteBcard({ id: scenario.bcard.one.id })
    const result = await bcard({ id: original.id })

    expect(result).toEqual(null)
  })
})
