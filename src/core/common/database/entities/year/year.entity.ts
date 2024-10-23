import { relations } from 'drizzle-orm'
import { boolean, pgTable, serial, text } from 'drizzle-orm/pg-core'
import { criteria } from '../criteria/criteria.entity'

export const year = pgTable('year', {
  id: serial('id').primaryKey(),
  year: text('year').unique().notNull(),
  is_stale: boolean('is_stale').notNull().default(true),
})

export const yearRelations = relations(year, ({ many }) => {
  return {
    criterias: many(criteria),
  }
})

export type YearEntity = typeof year.$inferSelect
export type YearEntityInsert = typeof year.$inferInsert
