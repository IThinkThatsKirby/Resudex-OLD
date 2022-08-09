import { db } from 'src/lib/db'

export const bcardspecializations = () => {
  return db.bcardspecialization.findMany()
}

export const bcardspecialization = ({ id }) => {
  return db.bcardspecialization.findUnique({
    where: { id },
  })
}

export const createBcardspecialization = ({ input }) => {
  return db.bcardspecialization.create({
    data: input,
  })
}

export const updateBcardspecialization = ({ id, input }) => {
  return db.bcardspecialization.update({
    data: input,
    where: { id },
  })
}

export const deleteBcardspecialization = ({ id }) => {
  return db.bcardspecialization.delete({
    where: { id },
  })
}

export const Bcardspecialization = {
  specialization: (_obj, { root }) =>
    db.bcardspecialization
      .findUnique({ where: { id: root.id } })
      .specialization(),
  Bcard: (_obj, { root }) =>
    db.bcardspecialization.findUnique({ where: { id: root.id } }).Bcard(),
}
