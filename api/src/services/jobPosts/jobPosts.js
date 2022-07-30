import { db } from 'src/lib/db'

export const jobPosts = () => {
  return db.jobPost.findMany()
}

export const jobPost = ({ id }) => {
  return db.jobPost.findUnique({
    where: { id },
  })
}

export const createJobPost = ({ input }) => {
  return db.jobPost.create({
    data: input,
  })
}

export const updateJobPost = ({ id, input }) => {
  return db.jobPost.update({
    data: input,
    where: { id },
  })
}

export const deleteJobPost = ({ id }) => {
  return db.jobPost.delete({
    where: { id },
  })
}
