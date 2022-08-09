export const schema = gql`
  type Profession {
    id: Int!
    type: String!
    Bcard: [Bcard]!
  }

  type Query {
    professions: [Profession!]! @requireAuth
    profession(id: Int!): Profession @requireAuth
  }

  input CreateProfessionInput {
    type: String!
  }

  input UpdateProfessionInput {
    type: String
  }

  type Mutation {
    createProfession(input: CreateProfessionInput!): Profession! @requireAuth
    updateProfession(id: Int!, input: UpdateProfessionInput!): Profession!
      @requireAuth
    deleteProfession(id: Int!): Profession! @requireAuth
  }
`
