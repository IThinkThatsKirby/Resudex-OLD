import { db } from 'src/lib/db'

export const versionBcards = () => {
  return db.versionBcard.findMany()
}

export const versionBcard = ({ id }) => {
  return db.versionBcard.findUnique({
    where: { id },
  })
}

export const createVersionBcard = ({ input }) => {
  return db.versionBcard.create({
    data: input,
  })
}

export const updateVersionBcard = ({ id, input }) => {
  return db.versionBcard.update({
    data: input,
    where: { id },
  })
}

export const deleteVersionBcard = ({ id }) => {
  return db.versionBcard.delete({
    where: { id },
  })
}
