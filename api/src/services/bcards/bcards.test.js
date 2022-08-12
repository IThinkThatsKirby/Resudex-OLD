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
        netlify_id: 'String',
        name: 'String',
        profession_id: scenario.bcard.two.profession_id,
        specialization1type: scenario.bcard.two.specialization1type,
        specialization1exp: 6675564,
        specialization2type: scenario.bcard.two.specialization2type,
        specialization2exp: 3281316,
        specialization3type: scenario.bcard.two.specialization3type,
        specialization3exp: 2148828,
      },
    })

    expect(result.netlify_id).toEqual('String')
    expect(result.name).toEqual('String')
    expect(result.profession_id).toEqual(scenario.bcard.two.profession_id)
    expect(result.specialization1type).toEqual(
      scenario.bcard.two.specialization1type
    )

    expect(result.specialization1exp).toEqual(6675564)
    expect(result.specialization2type).toEqual(
      scenario.bcard.two.specialization2type
    )

    expect(result.specialization2exp).toEqual(3281316)
    expect(result.specialization3type).toEqual(
      scenario.bcard.two.specialization3type
    )

    expect(result.specialization3exp).toEqual(2148828)
  })

  scenario('updates a bcard', async (scenario) => {
    const original = await bcard({ id: scenario.bcard.one.id })
    const result = await updateBcard({
      id: original.id,
      input: { netlify_id: 'String2' },
    })

    expect(result.netlify_id).toEqual('String2')
  })

  scenario('deletes a bcard', async (scenario) => {
    const original = await deleteBcard({ id: scenario.bcard.one.id })
    const result = await bcard({ id: original.id })

    expect(result).toEqual(null)
  })
})
