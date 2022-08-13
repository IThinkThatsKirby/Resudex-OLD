export const schema = gql`
  type VersionBcard {
    id: Int!
    selfie: String!
    netlify_id: String!
    name: String!
    cell_number: String
    email: String
    was_updated: Boolean
    was_deleted: Boolean
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

  type Query {
    versionBcards: [VersionBcard!]! @requireAuth
    versionBcard(id: Int!): VersionBcard @requireAuth
  }

  input CreateVersionBcardInput {
    selfie: String!
    netlify_id: String!
    name: String!
    cell_number: String
    email: String
    was_updated: Boolean
    was_deleted: Boolean
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

  input UpdateVersionBcardInput {
    selfie: String
    netlify_id: String
    name: String
    cell_number: String
    email: String
    was_updated: Boolean
    was_deleted: Boolean
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
    createVersionBcard(input: CreateVersionBcardInput!): VersionBcard!
      @requireAuth
    updateVersionBcard(
      id: Int!
      input: UpdateVersionBcardInput!
    ): VersionBcard! @requireAuth
    deleteVersionBcard(id: Int!): VersionBcard! @requireAuth
  }
`
