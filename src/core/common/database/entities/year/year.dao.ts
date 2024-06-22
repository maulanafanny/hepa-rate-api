import { Inject, Injectable } from '@nestjs/common'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { DatabaseConfig } from '@core/common/database/config/database.config'
import { PG_CONNECTION } from '@core/common/database/drizzle/pg-connection'
import { AbstractDao } from '@core/common/database/entities/abstract.dao'
import { YearEntity, YearEntityInsert, year } from '@core/common/database/entities/year/year.entity'
import * as yearSchema from '@core/common/database/entities/year/year.entity'

@Injectable()
export class YearDao extends AbstractDao<
  typeof yearSchema,
  typeof year,
  YearEntity,
  YearEntityInsert
> {
  constructor(
    @Inject(PG_CONNECTION) protected readonly db: PostgresJsDatabase<typeof yearSchema>,
    protected readonly dbConfig: DatabaseConfig,
  ) {
    super(db, year, dbConfig)
  }
}
