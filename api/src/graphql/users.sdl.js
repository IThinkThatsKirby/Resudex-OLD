export const schema = gql`
  type User {
    userId: Int!
    email: String!
    name: String
    memberSince: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    userId: Int!
    email: String!
    name: String
    memberSince: DateTime!
  }

  input UpdateUserInput {
    userId: Int
    email: String
    name: String
    memberSince: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
