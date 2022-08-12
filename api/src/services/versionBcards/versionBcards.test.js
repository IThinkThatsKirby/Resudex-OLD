import {
  versionBcards,
  versionBcard,
  createVersionBcard,
  updateVersionBcard,
  deleteVersionBcard,
} from './versionBcards'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('versionBcards', () => {
  scenario('returns all versionBcards', async (scenario) => {
    const result = await versionBcards()

    expect(result.length).toEqual(Object.keys(scenario.versionBcard).length)
  })

  scenario('returns a single versionBcard', async (scenario) => {
    const result = await versionBcard({ id: scenario.versionBcard.one.id })

    expect(result).toEqual(scenario.versionBcard.one)
  })

  scenario('creates a versionBcard', async () => {
    const result = await createVersionBcard({
      input: { bcard_id_old: 1038322, netlify_id: 'String' },
    })

    expect(result.bcard_id_old).toEqual(1038322)
    expect(result.netlify_id).toEqual('String')
  })

  scenario('updates a versionBcard', async (scenario) => {
    const original = await versionBcard({ id: scenario.versionBcard.one.id })
    const result = await updateVersionBcard({
      id: original.id,
      input: { bcard_id_old: 5587929 },
    })

    expect(result.bcard_id_old).toEqual(5587929)
  })

  scenario('deletes a versionBcard', async (scenario) => {
    const original = await deleteVersionBcard({
      id: scenario.versionBcard.one.id,
    })

    const result = await versionBcard({ id: original.id })

    expect(result).toEqual(null)
  })
})
