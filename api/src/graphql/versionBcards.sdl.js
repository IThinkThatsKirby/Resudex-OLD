export const schema = gql`
  type VersionBcard {
    id: Int!
    bcard_id_old: Int!
    netlify_id: String!
    cell_number: String
    email: String
    name: String
    was_updated: Boolean
    was_deleted: Boolean
    profession_id: Int
    specialization1type: String
    specialization1exp: Int
    specialization2type: String
    specialization2exp: Int
    specialization3type: String
    specialization3exp: Int
  }

  type Query {
    versionBcards: [VersionBcard!]! @requireAuth
    versionBcard(id: Int!): VersionBcard @requireAuth
  }

  input CreateVersionBcardInput {
    bcard_id_old: Int!
    netlify_id: String!
    cell_number: String
    email: String
    name: String
    was_updated: Boolean
    was_deleted: Boolean
    profession_id: Int
    specialization1type: String
    specialization1exp: Int
    specialization2type: String
    specialization2exp: Int
    specialization3type: String
    specialization3exp: Int
  }

  input UpdateVersionBcardInput {
    bcard_id_old: Int
    netlify_id: String
    cell_number: String
    email: String
    name: String
    was_updated: Boolean
    was_deleted: Boolean
    profession_id: Int
    specialization1type: String
    specialization1exp: Int
    specialization2type: String
    specialization2exp: Int
    specialization3type: String
    specialization3exp: Int
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
