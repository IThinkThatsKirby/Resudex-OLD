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
    bcards: [Bcard!]! @skipAuth
    bcard(id: Int!): Bcard @skipAuth
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
    createBcard(input: CreateBcardInput!): Bcard! @skipAuth
    updateBcard(id: Int!, input: UpdateBcardInput!): Bcard! @skipAuth
    deleteBcard(id: Int!): Bcard! @skipAuth
  }
`
