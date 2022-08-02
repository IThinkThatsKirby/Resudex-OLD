export const schema = gql`
  type JobPost {
    jobId: Int!
    jobPosterName: String
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    jobPosts: [JobPost!]! @requireAuth
    jobPost(id: Int!): JobPost @requireAuth
  }

  input CreateJobPostInput {
    jobId: Int!
    jobPosterName: String
    title: String!
    body: String!
  }

  input UpdateJobPostInput {
    jobId: Int
    jobPosterName: String
    title: String
    body: String
  }

  type Mutation {
    createJobPost(input: CreateJobPostInput!): JobPost! @requireAuth
    updateJobPost(id: Int!, input: UpdateJobPostInput!): JobPost! @requireAuth
    deleteJobPost(id: Int!): JobPost! @requireAuth
  }
`
