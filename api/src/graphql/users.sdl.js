export const schema = gql`
  type User {
    user_id: Int!
    name: String!
    phone_number: String!
    user_type_id: Int!
    bcard: [Bcard]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    user_id: Int!
    name: String!
    phone_number: String!
    user_type_id: Int!
  }

  input UpdateUserInput {
    user_id: Int
    name: String
    phone_number: String
    user_type_id: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
