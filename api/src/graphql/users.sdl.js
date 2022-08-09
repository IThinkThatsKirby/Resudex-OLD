export const schema = gql`
  type User {
    id: Int!
    name: String!
    email: String
    password: String
    phone_number: String
    user_type_id: Int
    bcard: [Bcard]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String!
    email: String
    password: String
    phone_number: String
    user_type_id: Int
  }

  input UpdateUserInput {
    name: String
    email: String
    password: String
    phone_number: String
    user_type_id: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
