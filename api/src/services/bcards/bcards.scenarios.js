export const standard = defineScenario({
  bcard: {
    one: {
      data: {
        netlify_id: 'String',
        name: 'String',
        profession: { create: { type: 'String1459977' } },
        specialization1: {
          create: {
            type: 'String3046416',
            profession: { create: { type: 'String272580' } },
          },
        },
      },
    },

    two: {
      data: {
        netlify_id: 'String',
        name: 'String',
        profession: { create: { type: 'String2026602' } },
        specialization1: {
          create: {
            type: 'String2998147',
            profession: { create: { type: 'String7622662' } },
          },
        },
      },
    },
  },
})
