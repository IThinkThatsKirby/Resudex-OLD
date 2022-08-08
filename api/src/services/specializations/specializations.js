import { db } from 'src/lib/db'

export const specializations = () => {
  return db.specialization.findMany()
}

export const specialization = ({ id }) => {
  return db.specialization.findUnique({
    where: { id },
  })
}

export const createSpecialization = ({ input }) => {
  return db.specialization.create({
    data: input,
  })
}

export const updateSpecialization = ({ id, input }) => {
  return db.specialization.update({
    data: input,
    where: { id },
  })
}

export const deleteSpecialization = ({ id }) => {
  return db.specialization.delete({
    where: { id },
  })
}
