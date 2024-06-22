import { integer, pgTable, serial } from 'drizzle-orm/pg-core'

export const year = pgTable('year', {
  id: serial('id').primaryKey(),
  year: integer('year').notNull(),
})

export type YearEntity = typeof year.$inferSelect
export type YearEntityInsert = typeof year.$inferInsert
