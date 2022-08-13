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
      input: {
        selfie: 'String',
        netlify_id: 'String',
        name: 'String',
        profession: 'String',
        specialization1: 'String',
        specialization1exp: 4324572,
      },
    })

    expect(result.selfie).toEqual('String')
    expect(result.netlify_id).toEqual('String')
    expect(result.name).toEqual('String')
    expect(result.profession).toEqual('String')
    expect(result.specialization1).toEqual('String')
    expect(result.specialization1exp).toEqual(4324572)
  })

  scenario('updates a versionBcard', async (scenario) => {
    const original = await versionBcard({ id: scenario.versionBcard.one.id })
    const result = await updateVersionBcard({
      id: original.id,
      input: { selfie: 'String2' },
    })

    expect(result.selfie).toEqual('String2')
  })

  scenario('deletes a versionBcard', async (scenario) => {
    const original = await deleteVersionBcard({
      id: scenario.versionBcard.one.id,
    })

    const result = await versionBcard({ id: original.id })

    expect(result).toEqual(null)
  })
})
