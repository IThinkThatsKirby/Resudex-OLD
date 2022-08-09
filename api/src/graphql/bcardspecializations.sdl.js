export const schema = gql`
  type Bcardspecialization {
    bcs_id: Int!
    user_id: Int!
    specialization_id: Int!
    bcard_id: Int!
    years_exp: Int!
  }

  type Query {
    bcardspecializations: [Bcardspecialization!]! @requireAuth
    bcardspecialization(id: Int!): Bcardspecialization @requireAuth
  }

  input CreateBcardspecializationInput {
    bcs_id: Int!
    user_id: Int!
    specialization_id: Int!
    bcard_id: Int!
    years_exp: Int!
  }

  input UpdateBcardspecializationInput {
    bcs_id: Int
    user_id: Int
    specialization_id: Int
    bcard_id: Int
    years_exp: Int
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
