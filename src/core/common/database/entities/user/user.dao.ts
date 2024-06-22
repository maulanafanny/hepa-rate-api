import { Inject, Injectable } from '@nestjs/common'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { DatabaseConfig } from '@core/common/database/config/database.config'
import { PG_CONNECTION } from '@core/common/database/drizzle/pg-connection'
import { AbstractDao } from '@core/common/database/entities/abstract.dao'
import { UserEntity, UserEntityInsert, user } from '@core/common/database/entities/user/user.entity'
import * as userSchema from '@core/common/database/entities/user/user.entity'

@Injectable()
export class UserDao extends AbstractDao<
  typeof userSchema,
  typeof user,
  UserEntity,
  UserEntityInsert
> {
  constructor(
    @Inject(PG_CONNECTION) protected readonly db: PostgresJsDatabase<typeof userSchema>,
    protected readonly dbConfig: DatabaseConfig,
  ) {
    super(db, user, dbConfig)
  }
}
