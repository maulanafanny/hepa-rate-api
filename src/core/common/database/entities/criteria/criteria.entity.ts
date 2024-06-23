import { doublePrecision, integer, pgTable, serial } from 'drizzle-orm/pg-core'
import { withModificationDates } from '../../entities/helpers/with-modification-dates'
import { year } from '../year/year.entity'
import { district } from '../district/district.entity'
import { relations } from 'drizzle-orm'

export const criteria = pgTable('criteria', {
  id: serial('id').primaryKey(),
  total_case: integer('total_case').notNull(),
  total_population: integer('total_population').notNull(),
  sanitation_rate: doublePrecision('sanitation_rate').notNull(),
  clean_water_rate: doublePrecision('clean_water_rate').notNull(),
  safe_house_rate: doublePrecision('safe_house_rate').notNull(),
  district_id: integer('district_id')
    .references(() => district.id)
    .notNull(),
  year_id: integer('year_id')
    .references(() => year.id)
    .notNull(),
  ...withModificationDates,
})

export const criteriaRelations = relations(criteria, ({ one }) => {
  return {
    district: one(district),
    year: one(year),
  }
})

export type CriteriaEntity = typeof criteria.$inferSelect
export type CriteriaEntityInsert = typeof criteria.$inferInsert
