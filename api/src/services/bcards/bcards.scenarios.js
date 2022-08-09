export const standard = defineScenario({
  bcard: {
    one: {
      data: {
        owner: { create: { name: 'String', phone_number: 'String' } },
        profession: { create: { type: 'String8632659' } },
      },
    },

    two: {
      data: {
        owner: { create: { name: 'String', phone_number: 'String' } },
        profession: { create: { type: 'String3917371' } },
      },
    },
  },
})
