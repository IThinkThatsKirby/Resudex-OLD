import {
  professions,
  profession,
  createProfession,
  updateProfession,
  deleteProfession,
} from './professions'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('professions', () => {
  scenario('returns all professions', async (scenario) => {
    const result = await professions()

    expect(result.length).toEqual(Object.keys(scenario.profession).length)
  })

  scenario('returns a single profession', async (scenario) => {
    const result = await profession({ id: scenario.profession.one.id })

    expect(result).toEqual(scenario.profession.one)
  })

  scenario('creates a profession', async () => {
    const result = await createProfession({
      input: { type: 'String1507619' },
    })

    expect(result.type).toEqual('String1507619')
  })

  scenario('updates a profession', async (scenario) => {
    const original = await profession({ id: scenario.profession.one.id })
    const result = await updateProfession({
      id: original.id,
      input: { type: 'String41036622' },
    })

    expect(result.type).toEqual('String41036622')
  })

  scenario('deletes a profession', async (scenario) => {
    const original = await deleteProfession({ id: scenario.profession.one.id })
    const result = await profession({ id: original.id })

    expect(result).toEqual(null)
  })
})
