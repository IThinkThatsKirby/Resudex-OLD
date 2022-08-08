export const schema = gql`
  type Bcardspecialization {
    user_id: Int!
    specialization_id: Int!
    bcard_id: Int!
  }

  type Query {
    bcardspecializations: [Bcardspecialization!]! @requireAuth
    bcardspecialization(id: Int!): Bcardspecialization @requireAuth
  }

  input CreateBcardspecializationInput {
    user_id: Int!
    specialization_id: Int!
    bcard_id: Int!
  }

  input UpdateBcardspecializationInput {
    user_id: Int
    specialization_id: Int
    bcard_id: Int
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
