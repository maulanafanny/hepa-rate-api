import { Inject, Injectable } from '@nestjs/common'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { DatabaseConfig } from '../../config/database.config'
import { PG_CONNECTION } from '../../drizzle/pg-connection'
import { AbstractDao } from '../../entities/abstract.dao'
import {
  DistrictEntity,
  DistrictEntityInsert,
  district,
} from '../../entities/district/district.entity'
import * as districtSchema from '../../entities/district/district.entity'

@Injectable()
export class DistrictDao extends AbstractDao<
  typeof districtSchema,
  typeof district,
  DistrictEntity,
  DistrictEntityInsert
> {
  constructor(
    @Inject(PG_CONNECTION) protected readonly db: PostgresJsDatabase<typeof districtSchema>,
    protected readonly dbConfig: DatabaseConfig,
  ) {
    super(db, district, dbConfig)
  }
}
