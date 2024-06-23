import { relations } from 'drizzle-orm'
import { index, pgTable, serial, varchar } from 'drizzle-orm/pg-core'
import { criteria } from '../criteria/criteria.entity'

export const district = pgTable(
  'district',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
  },
  (district) => ({
    nameIdx: index('district_name_idx').on(district.name),
  }),
)

export const districtRelations = relations(district, ({ many }) => {
  return {
    criterias: many(criteria),
  }
})

export type DistrictEntity = typeof district.$inferSelect
export type DistrictEntityInsert = typeof district.$inferInsert
