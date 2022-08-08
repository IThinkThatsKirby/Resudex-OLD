import {
  bcardspecializations,
  bcardspecialization,
  createBcardspecialization,
  updateBcardspecialization,
  deleteBcardspecialization,
} from './bcardspecializations'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('bcardspecializations', () => {
  scenario('returns all bcardspecializations', async (scenario) => {
    const result = await bcardspecializations()

    expect(result.length).toEqual(
      Object.keys(scenario.bcardspecialization).length
    )
  })

  scenario('returns a single bcardspecialization', async (scenario) => {
    const result = await bcardspecialization({
      id: scenario.bcardspecialization.one.id,
    })

    expect(result).toEqual(scenario.bcardspecialization.one)
  })

  scenario('creates a bcardspecialization', async () => {
    const result = await createBcardspecialization({
      input: {
        user_id: 5507716,
        specialization_id: 1855028,
        bcard_id: 9066270,
      },
    })

    expect(result.user_id).toEqual(5507716)
    expect(result.specialization_id).toEqual(1855028)
    expect(result.bcard_id).toEqual(9066270)
  })

  scenario('updates a bcardspecialization', async (scenario) => {
    const original = await bcardspecialization({
      id: scenario.bcardspecialization.one.id,
    })

    const result = await updateBcardspecialization({
      id: original.id,
      input: { user_id: 290576 },
    })

    expect(result.user_id).toEqual(290576)
  })

  scenario('deletes a bcardspecialization', async (scenario) => {
    const original = await deleteBcardspecialization({
      id: scenario.bcardspecialization.one.id,
    })

    const result = await bcardspecialization({ id: original.id })

    expect(result).toEqual(null)
  })
})
