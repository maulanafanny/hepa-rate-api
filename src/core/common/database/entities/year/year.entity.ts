import { relations } from 'drizzle-orm'
import { integer, pgTable, serial } from 'drizzle-orm/pg-core'
import { criteria } from '../criteria/criteria.entity'

export const year = pgTable('year', {
  id: serial('id').primaryKey(),
  year: integer('year').notNull(),
})

export const yearRelations = relations(year, ({ many }) => {
  return {
    criterias: many(criteria),
  }
})

export type YearEntity = typeof year.$inferSelect
export type YearEntityInsert = typeof year.$inferInsert
