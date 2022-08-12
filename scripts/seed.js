import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },
      {
        type: 'RedwoodJS',
        profession_id: 1,
      },
      {
        type: 'ReactJS',
        profession_id: 1,
      },
      {
        type: 'ExpressJS',
        profession_id: 1,
      },
      {
        type: 'GraphQL',
        profession_id: 1,
      },
      {
        type: 'SQL',
        profession_id: 1,
      },
      {
        type: 'Mongoose',
        profession_id: 1,
      },
      {
        type: 'MongoDB',
        profession_id: 1,
      },
      {
        type: 'Prisma',
        profession_id: 1,
      },
      {
        type: 'Lodash',
        profession_id: 1,
      },
      {
        type: 'TailwindCSS',
        profession_id: 1,
      },
      {
        type: 'Bootstrap',
        profession_id: 1,
      },
      {
        type: 'MaterialUI',
        profession_id: 1,
      },
      {
        type: 'Sass',
        profession_id: 1,
      },
      {
        type: 'TypeScript',
        profession_id: 1,
      },
      {
        type: 'Java',
        profession_id: 1,
      },
      {
        type: 'C',
        profession_id: 1,
      },
      {
        type: 'GO',
        profession_id: 1,
      },
      {
        type: 'Carbon',
        profession_id: 1,
      },
      {
        type: 'Pediatrician',
        profession_id: 2,
      },
      {
        type: 'Neurologist',
        profession_id: 2,
      },
      {
        type: 'OB/GYN',
        profession_id: 2,
      },
      {
        type: 'Osteopaths',
        profession_id: 2,
      },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data) => {
        const record = await db.specialization.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
