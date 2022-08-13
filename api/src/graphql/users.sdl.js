export const schema = gql`
  type User {
    id: Int!
    netlify_id: String
    selfie_id: Int
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    netlify_id: String
    selfie_id: Int
  }

  input UpdateUserInput {
    netlify_id: String
    selfie_id: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
