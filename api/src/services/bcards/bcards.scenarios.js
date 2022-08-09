export const standard = defineScenario({
  bcard: {
    one: {
      data: {
        profession_id: 8453714,
        owner: { create: { name: 'String', phone_number: 'String' } },
      },
    },

    two: {
      data: {
        profession_id: 1535940,
        owner: { create: { name: 'String', phone_number: 'String' } },
      },
    },
  },
})
