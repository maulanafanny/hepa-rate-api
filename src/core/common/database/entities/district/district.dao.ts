import { Inject, Injectable } from '@nestjs/common'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { DatabaseConfig } from '@core/common/database/config/database.config'
import { PG_CONNECTION } from '@core/common/database/drizzle/pg-connection'
import { AbstractDao } from '@core/common/database/entities/abstract.dao'
import {
  DistrictEntity,
  DistrictEntityInsert,
  district,
} from '@core/common/database/entities/district/district.entity'
import * as districtSchema from '@core/common/database/entities/district/district.entity'

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
