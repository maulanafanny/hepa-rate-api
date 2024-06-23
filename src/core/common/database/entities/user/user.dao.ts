import { Inject, Injectable } from '@nestjs/common'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { DatabaseConfig } from '../../config/database.config'
import { PG_CONNECTION } from '../../drizzle/pg-connection'
import { AbstractDao } from '../../entities/abstract.dao'
import { UserEntity, UserEntityInsert, user } from '../../entities/user/user.entity'
import * as userSchema from '../../entities/user/user.entity'

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
