export const schema = gql`
  type Profession {
    type: String!
    profession_id: Int!
    Bcard: [Bcard]!
  }

  type Query {
    professions: [Profession!]! @requireAuth
    profession(id: Int!): Profession @requireAuth
  }

  input CreateProfessionInput {
    type: String!
    profession_id: Int!
  }

  input UpdateProfessionInput {
    type: String
    profession_id: Int
  }

  type Mutation {
    createProfession(input: CreateProfessionInput!): Profession! @requireAuth
    updateProfession(id: Int!, input: UpdateProfessionInput!): Profession!
      @requireAuth
    deleteProfession(id: Int!): Profession! @requireAuth
  }
`
