import { Inject, Injectable } from '@nestjs/common'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { DatabaseConfig } from '../../config/database.config'
import { PG_CONNECTION } from '../../drizzle/pg-connection'
import { AbstractDao } from '../../entities/abstract.dao'
import {
  CriteriaEntity,
  CriteriaEntityInsert,
  criteria,
} from '../../entities/criteria/criteria.entity'
import * as criteriaSchema from '../../entities/criteria/criteria.entity'

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
