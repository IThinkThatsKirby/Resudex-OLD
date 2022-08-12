export const schema = gql`
  type Bcard {
    id: Int!
    netlify_id: String!
    cell_number: String
    email: String
    name: String!
    was_updated: Boolean
    profession: Profession!
    profession_id: Int!
    specialization1: Specialization!
    specialization1type: String!
    specialization1exp: Int!
    specialization2: Specialization
    specialization2type: String!
    specialization2exp: Int!
    specialization3: Specialization
    specialization3type: String!
    specialization3exp: Int!
    UserResudex: [UserResudex]!
  }

  type Query {
    bcards: [Bcard!]! @requireAuth
    bcard(id: Int!): Bcard @requireAuth
  }

  input CreateBcardInput {
    netlify_id: String!
    cell_number: String
    email: String
    name: String!
    was_updated: Boolean
    profession_id: Int!
    specialization1type: String!
    specialization1exp: Int!
    specialization2type: String!
    specialization2exp: Int!
    specialization3type: String!
    specialization3exp: Int!
  }

  input UpdateBcardInput {
    netlify_id: String
    cell_number: String
    email: String
    name: String
    was_updated: Boolean
    profession_id: Int
    specialization1type: String
    specialization1exp: Int
    specialization2type: String
    specialization2exp: Int
    specialization3type: String
    specialization3exp: Int
  }

  type Mutation {
    createBcard(input: CreateBcardInput!): Bcard! @requireAuth
    updateBcard(id: Int!, input: UpdateBcardInput!): Bcard! @requireAuth
    deleteBcard(id: Int!): Bcard! @requireAuth
  }
`
