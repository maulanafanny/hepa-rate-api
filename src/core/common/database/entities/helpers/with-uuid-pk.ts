import { sql } from 'drizzle-orm'
import { uuid } from 'drizzle-orm/pg-core'

export const withUidPk = {
  id: uuid('id').primaryKey().default(sql.raw(`gen_random_uuid()`)),
}
