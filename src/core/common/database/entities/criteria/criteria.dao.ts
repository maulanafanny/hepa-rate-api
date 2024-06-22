import { Inject, Injectable } from '@nestjs/common'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { DatabaseConfig } from '@core/common/database/config/database.config'
import { PG_CONNECTION } from '@core/common/database/drizzle/pg-connection'
import { AbstractDao } from '@core/common/database/entities/abstract.dao'
import {
  CriteriaEntity,
  CriteriaEntityInsert,
  criteria,
} from '@core/common/database/entities/criteria/criteria.entity'
import * as criteriaSchema from '@core/common/database/entities/criteria/criteria.entity'

@Injectable()
export class CriteriaDao extends AbstractDao<
  typeof criteriaSchema,
  typeof criteria,
  CriteriaEntity,
  CriteriaEntityInsert
> {
  constructor(
    @Inject(PG_CONNECTION) protected readonly db: PostgresJsDatabase<typeof criteriaSchema>,
    protected readonly dbConfig: DatabaseConfig,
  ) {
    super(db, criteria, dbConfig)
  }
}
