export const standard = defineScenario({
  bcard: {
    one: {
      data: {
        netlify_id: 'String',
        name: 'String',
        specialization1exp: 5771578,
        specialization2exp: 6651109,
        specialization3exp: 8384463,
        profession: { create: { type: 'String9113675' } },
        specialization1: {
          create: {
            type: 'String5849252',
            profession: { create: { type: 'String1198790' } },
          },
        },
      },
    },

    two: {
      data: {
        netlify_id: 'String',
        name: 'String',
        specialization1exp: 9648699,
        specialization2exp: 2781360,
        specialization3exp: 8735578,
        profession: { create: { type: 'String18743' } },
        specialization1: {
          create: {
            type: 'String4449402',
            profession: { create: { type: 'String9685689' } },
          },
        },
      },
    },
  },
})
