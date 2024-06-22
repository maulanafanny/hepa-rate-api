import { index, pgTable, serial, varchar } from 'drizzle-orm/pg-core'

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

export type DistrictEntity = typeof district.$inferSelect
export type DistrictEntityInsert = typeof district.$inferInsert
