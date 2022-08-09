export const schema = gql`
  type User {
    user_id: Int!
    name: String!
    email: String
    password: String
    phone_number: String!
    user_type_id: Int!
    bcard: [Bcard]!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    user_id: Int!
    name: String!
    email: String
    password: String
    phone_number: String!
    user_type_id: Int!
  }

  input UpdateUserInput {
    user_id: Int
    name: String
    email: String
    password: String
    phone_number: String
    user_type_id: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
  }
`
