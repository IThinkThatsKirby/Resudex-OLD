import { db } from 'src/lib/db'

export const userResudexes = (args, { root, context, info }) => {
  return db.userResudex.findMany({
    where: args,
  })
}

export const userResudex = ({ id }) => {
  return db.userResudex.findUnique({
    where: { id },
  })
}

export const createUserResudex = ({ input }) => {
  return db.userResudex.create({
    data: input,
  })
}

export const updateUserResudex = ({ id, input }) => {
  return db.userResudex.update({
    data: input,
    where: { id },
  })
}

export const deleteUserResudex = ({ id }) => {
  return db.userResudex.delete({
    where: { id },
  })
}

export const UserResudex = {
  bcard: (_obj, { root }) =>
    db.userResudex.findUnique({ where: { id: root.id } }).bcard(),
}
