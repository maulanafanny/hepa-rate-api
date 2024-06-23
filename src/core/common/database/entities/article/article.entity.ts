import { index, pgTable, serial, text } from 'drizzle-orm/pg-core'
import { withModificationDates } from '../../entities/helpers/with-modification-dates'

export const article = pgTable(
  'article',
  {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content').notNull(),
    ...withModificationDates,
  },
  (article) => ({
    titleIdx: index('article_title_idx').on(article.title),
  }),
)

export type ArticleEntity = typeof article.$inferSelect
export type ArticleEntityInsert = typeof article.$inferInsert
