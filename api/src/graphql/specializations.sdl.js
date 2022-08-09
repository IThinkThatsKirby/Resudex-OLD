export const schema = gql`
  type Specialization {
    specialization_id: Int!
    type: String!
    profession_id: Int!
    Bcardspecializations: [Bcardspecialization]!
  }

  type Query {
    specializations: [Specialization!]! @requireAuth
    specialization(id: Int!): Specialization @requireAuth
  }

  input CreateSpecializationInput {
    specialization_id: Int!
    type: String!
    profession_id: Int!
  }

  input UpdateSpecializationInput {
    specialization_id: Int
    type: String
    profession_id: Int
  }

  type Mutation {
    createSpecialization(input: CreateSpecializationInput!): Specialization!
      @requireAuth
    updateSpecialization(
      id: Int!
      input: UpdateSpecializationInput!
    ): Specialization! @requireAuth
    deleteSpecialization(id: Int!): Specialization! @requireAuth
  }
`
