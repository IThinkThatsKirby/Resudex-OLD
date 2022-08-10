export const schema = gql`
  type Bcard {
    id: Int!
    netlify_id: Int!
    cell_number: String
    email: String
    name: String!
    profession: Profession!
    specializations: [Bcardspecialization]!
    profession_id: Int!
  }

  type Query {
    bcards: [Bcard!]! @requireAuth
    bcard(id: Int!): Bcard @requireAuth
  }

  input CreateBcardInput {
    netlify_id: Int!
    cell_number: String
    email: String
    name: String!
    profession_id: Int!
  }

  input UpdateBcardInput {
    netlify_id: Int
    cell_number: String
    email: String
    name: String
    profession_id: Int
  }

  type Mutation {
    createBcard(input: CreateBcardInput!): Bcard! @requireAuth
    updateBcard(id: Int!, input: UpdateBcardInput!): Bcard! @requireAuth
    deleteBcard(id: Int!): Bcard! @requireAuth
  }
`
