import { Inject, Injectable } from '@nestjs/common'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { DatabaseConfig } from '../../config/database.config'
import { PG_CONNECTION } from '../../drizzle/pg-connection'
import { AbstractDao } from '../../entities/abstract.dao'
import { ArticleEntity, ArticleEntityInsert, article } from '../../entities/article/article.entity'
import * as articleSchema from '../../entities/article/article.entity'

@Injectable()
export class ArticleDao extends AbstractDao<
  typeof articleSchema,
  typeof article,
  ArticleEntity,
  ArticleEntityInsert
> {
  constructor(
    @Inject(PG_CONNECTION) protected readonly db: PostgresJsDatabase<typeof articleSchema>,
    protected readonly dbConfig: DatabaseConfig,
  ) {
    super(db, article, dbConfig)
  }
}
