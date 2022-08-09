export const standard = defineScenario({
  bcard: {
    one: {
      data: {
        owner: { create: { name: 'String', phone_number: 'String' } },
        profession: { create: { type: 'String9758673' } },
      },
    },

    two: {
      data: {
        owner: { create: { name: 'String', phone_number: 'String' } },
        profession: { create: { type: 'String3106505' } },
      },
    },
  },
})
