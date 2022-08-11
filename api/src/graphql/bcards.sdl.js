export const schema = gql`
  type Bcard {
    id: Int!
    netlify_id: String!
    cell_number: String
    email: String
    name: String!
    profession: Profession!
    profession_id: Int!
    specialization1: Specialization!
    specialization1type: String!
    specialization2: Specialization
    specialization2type: String!
    specialization3: Specialization
    specialization3type: String!
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
    profession_id: Int!
    specialization1type: String!
    specialization2type: String!
    specialization3type: String!
  }

  input UpdateBcardInput {
    netlify_id: String
    cell_number: String
    email: String
    name: String
    profession_id: Int
    specialization1type: String
    specialization2type: String
    specialization3type: String
  }

  type Mutation {
    createBcard(input: CreateBcardInput!): Bcard! @requireAuth
    updateBcard(id: Int!, input: UpdateBcardInput!): Bcard! @requireAuth
    deleteBcard(id: Int!): Bcard! @requireAuth
  }
`
