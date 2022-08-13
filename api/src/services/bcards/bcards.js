import { db } from 'src/lib/db'

export const userBcards = (args) => {
  return db.bcard.findMany({ where: args })
}

export const bcards = () => {
  return db.bcard.findMany()
}

export const bcard = ({ id }) => {
  return db.bcard.findUnique({
    where: { id },
  })
}

export const createBcard = ({ input }) => {
  return db.bcard.create({
    data: input,
  })
}

export const updateBcard = ({ id, input }) => {
  return db.bcard.update({
    data: input,
    where: { id },
  })
}

export const deleteBcard = ({ id }) => {
  return db.bcard.delete({
    where: { id },
  })
}

export const Bcard = {
  UserResudex: (_obj, { root }) =>
    db.bcard.findUnique({ where: { id: root.id } }).UserResudex(),
}
