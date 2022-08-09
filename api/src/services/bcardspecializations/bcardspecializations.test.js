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
        bcs_id: 5774805,
        user_id: 7669477,
        specialization_id: 8128209,
        bcard_id: 8196592,
        years_exp: 8380486,
      },
    })

    expect(result.bcs_id).toEqual(5774805)
    expect(result.user_id).toEqual(7669477)
    expect(result.specialization_id).toEqual(8128209)
    expect(result.bcard_id).toEqual(8196592)
    expect(result.years_exp).toEqual(8380486)
  })

  scenario('updates a bcardspecialization', async (scenario) => {
    const original = await bcardspecialization({
      id: scenario.bcardspecialization.one.id,
    })

    const result = await updateBcardspecialization({
      id: original.id,
      input: { bcs_id: 9489931 },
    })

    expect(result.bcs_id).toEqual(9489931)
  })

  scenario('deletes a bcardspecialization', async (scenario) => {
    const original = await deleteBcardspecialization({
      id: scenario.bcardspecialization.one.id,
    })

    const result = await bcardspecialization({ id: original.id })

    expect(result).toEqual(null)
  })
})
