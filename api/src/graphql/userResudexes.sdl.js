export const schema = gql`
  type UserResudex {
    id: Int!
    netlify_id: String!
    bcard: Bcard
    bcard_id: Int
  }

  type Query {
    userResudexes: [UserResudex!]! @requireAuth
    userResudex(id: Int!): UserResudex @requireAuth
  }

  input CreateUserResudexInput {
    netlify_id: String!
    bcard_id: Int
  }

  input UpdateUserResudexInput {
    netlify_id: String
    bcard_id: Int
  }

  type Mutation {
    createUserResudex(input: CreateUserResudexInput!): UserResudex! @requireAuth
    updateUserResudex(id: Int!, input: UpdateUserResudexInput!): UserResudex!
      @requireAuth
    deleteUserResudex(id: Int!): UserResudex! @requireAuth
  }
`
