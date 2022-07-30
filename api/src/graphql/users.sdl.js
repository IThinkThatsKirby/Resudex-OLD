export const schema = gql`
  type User {
    name: String
    email: String!
    jobTitle: String
    jobExp: Int!
    yearsInIndustry: Int!
    memberSince: DateTime!
    userId: Int!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String
    email: String!
    jobTitle: String
    jobExp: Int!
    yearsInIndustry: Int!
    memberSince: DateTime!
    userId: Int!
  }

  input UpdateUserInput {
    name: String
    email: String
    jobTitle: String
    jobExp: Int
    yearsInIndustry: Int
    memberSince: DateTime
    userId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
