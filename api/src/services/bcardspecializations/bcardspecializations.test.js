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

  scenario('creates a bcardspecialization', async (scenario) => {
    const result = await createBcardspecialization({
      input: {
        years_exp: 9491595,
        Bcard_id: scenario.bcardspecialization.two.Bcard_id,
        specialization_id: scenario.bcardspecialization.two.specialization_id,
      },
    })

    expect(result.years_exp).toEqual(9491595)
    expect(result.Bcard_id).toEqual(scenario.bcardspecialization.two.Bcard_id)
    expect(result.specialization_id).toEqual(
      scenario.bcardspecialization.two.specialization_id
    )
  })

  scenario('updates a bcardspecialization', async (scenario) => {
    const original = await bcardspecialization({
      id: scenario.bcardspecialization.one.id,
    })

    const result = await updateBcardspecialization({
      id: original.id,
      input: { years_exp: 4489985 },
    })

    expect(result.years_exp).toEqual(4489985)
  })

  scenario('deletes a bcardspecialization', async (scenario) => {
    const original = await deleteBcardspecialization({
      id: scenario.bcardspecialization.one.id,
    })

    const result = await bcardspecialization({ id: original.id })

    expect(result).toEqual(null)
  })
})
