export const schema = gql`
  type Bcard {
    bcard_id: Int!
    owner: User!
    profession: Profession!
    specializations: [Bcardspecialization]!
    user_id: Int!
    profession_id: Int!
  }

  type Query {
    bcards: [Bcard!]! @requireAuth
    bcard(id: Int!): Bcard @requireAuth
  }

  input CreateBcardInput {
    bcard_id: Int!
    user_id: Int!
    profession_id: Int!
  }

  input UpdateBcardInput {
    bcard_id: Int
    user_id: Int
    profession_id: Int
  }

  type Mutation {
    createBcard(input: CreateBcardInput!): Bcard! @requireAuth
    updateBcard(id: Int!, input: UpdateBcardInput!): Bcard! @requireAuth
    deleteBcard(id: Int!): Bcard! @requireAuth
  }
`
