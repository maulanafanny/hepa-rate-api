import { Inject, Injectable } from '@nestjs/common'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { DatabaseConfig } from '@core/common/database/config/database.config'
import { PG_CONNECTION } from '@core/common/database/drizzle/pg-connection'
import { AbstractDao } from '@core/common/database/entities/abstract.dao'
import {
  ArticleEntity,
  ArticleEntityInsert,
  article,
} from '@core/common/database/entities/article/article.entity'
import * as articleSchema from '@core/common/database/entities/article/article.entity'

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
