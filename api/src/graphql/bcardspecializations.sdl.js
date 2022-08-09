export const schema = gql`
  type Bcardspecialization {
    id: Int!
    specialization: Specialization!
    years_exp: Int!
    Bcard: Bcard
    Bcard_id: Int!
    specialization_id: Int!
  }

  type Query {
    bcardspecializations: [Bcardspecialization!]! @requireAuth
    bcardspecialization(id: Int!): Bcardspecialization @requireAuth
  }

  input CreateBcardspecializationInput {
    years_exp: Int!
    Bcard_id: Int!
    specialization_id: Int!
  }

  input UpdateBcardspecializationInput {
    years_exp: Int
    Bcard_id: Int
    specialization_id: Int
  }

  type Mutation {
    createBcardspecialization(
      input: CreateBcardspecializationInput!
    ): Bcardspecialization! @requireAuth
    updateBcardspecialization(
      id: Int!
      input: UpdateBcardspecializationInput!
    ): Bcardspecialization! @requireAuth
    deleteBcardspecialization(id: Int!): Bcardspecialization! @requireAuth
  }
`
