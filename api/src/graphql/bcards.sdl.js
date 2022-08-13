export const schema = gql`
  type Bcard {
    id: Int!
    selfie: String!
    netlify_id: String!
    name: String!
    cell_number: String
    email: String
    was_updated: Boolean
    profession: String!
    specialization1: String!
    specialization1exp: Int!
    spreference1: String
    specialization2: String
    specialization2exp: Int
    spreference2: String
    specialization3: String
    specialization3exp: Int
    spreference3: String
    UserResudex: [UserResudex]!
  }

  type Query {
    userBcards(netlify_id: String): [Bcard] @skipAuth
    bcards: [Bcard!]! @requireAuth
    bcard(id: Int!): Bcard @requireAuth
  }

  input CreateBcardInput {
    selfie: String!
    netlify_id: String!
    name: String!
    cell_number: String
    email: String
    was_updated: Boolean
    profession: String!
    specialization1: String!
    specialization1exp: Int!
    spreference1: String
    specialization2: String
    specialization2exp: Int
    spreference2: String
    specialization3: String
    specialization3exp: Int
    spreference3: String
  }

  input UpdateBcardInput {
    selfie: String
    netlify_id: String
    name: String
    cell_number: String
    email: String
    was_updated: Boolean
    profession: String
    specialization1: String
    specialization1exp: Int
    spreference1: String
    specialization2: String
    specialization2exp: Int
    spreference2: String
    specialization3: String
    specialization3exp: Int
    spreference3: String
  }

  type Mutation {
    createBcard(input: CreateBcardInput!): Bcard! @requireAuth
    updateBcard(id: Int!, input: UpdateBcardInput!): Bcard! @requireAuth
    deleteBcard(id: Int!): Bcard! @requireAuth
  }
`
