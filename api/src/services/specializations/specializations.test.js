import {
  specializations,
  specialization,
  createSpecialization,
  updateSpecialization,
  deleteSpecialization,
} from './specializations'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('specializations', () => {
  scenario('returns all specializations', async (scenario) => {
    const result = await specializations()

    expect(result.length).toEqual(Object.keys(scenario.specialization).length)
  })

  scenario('returns a single specialization', async (scenario) => {
    const result = await specialization({
      id: scenario.specialization.one.id,
    })

    expect(result).toEqual(scenario.specialization.one)
  })

  scenario('creates a specialization', async () => {
    const result = await createSpecialization({
      input: { type: 'String2005166', profession_id: 9277821 },
    })

    expect(result.type).toEqual('String2005166')
    expect(result.profession_id).toEqual(9277821)
  })

  scenario('updates a specialization', async (scenario) => {
    const original = await specialization({
      id: scenario.specialization.one.id,
    })

    const result = await updateSpecialization({
      id: original.id,
      input: { type: 'String56008482' },
    })

    expect(result.type).toEqual('String56008482')
  })

  scenario('deletes a specialization', async (scenario) => {
    const original = await deleteSpecialization({
      id: scenario.specialization.one.id,
    })

    const result = await specialization({ id: original.id })

    expect(result).toEqual(null)
  })
})
