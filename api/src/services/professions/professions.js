import { db } from 'src/lib/db'

export const professions = () => {
  return db.profession.findMany()
}

export const profession = ({ id }) => {
  return db.profession.findUnique({
    where: { id },
  })
}

export const createProfession = ({ input }) => {
  return db.profession.create({
    data: input,
  })
}

export const updateProfession = ({ id, input }) => {
  return db.profession.update({
    data: input,
    where: { id },
  })
}

export const deleteProfession = ({ id }) => {
  return db.profession.delete({
    where: { id },
  })
}

export const Profession = {
  Bcard: (_obj, { root }) =>
    db.profession.findUnique({ where: { id: root.id } }).Bcard(),
}
