import { index, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'
import { withModificationDates } from '../../entities/helpers/with-modification-dates'

export const user = pgTable(
  'user',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: text('email').unique().notNull(),
    password: varchar('password').notNull(),
    ...withModificationDates,
  },
  (user) => ({
    nameIdx: index('user_name_idx').on(user.name),
  }),
)

export type UserEntity = typeof user.$inferSelect
export type UserEntityInsert = typeof user.$inferInsert
