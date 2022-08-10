export const schema = gql`
  type Bcard {
    id: Int!
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
    user_id: Int!
    profession_id: Int!
  }

  input UpdateBcardInput {
    user_id: Int
    profession_id: Int
  }

  type Mutation {
    createBcard(input: CreateBcardInput!): Bcard! @skipAuth
    updateBcard(id: Int!, input: UpdateBcardInput!): Bcard! @skipAuth
  }
`
