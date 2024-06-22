import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseConfig } from '@core/common/database/config/database.config'
import { DrizzleModule } from '@core/common/database/drizzle/drizzle.module'
import { ArticleDao } from '@core/common/database/entities/article/article.dao'
import { UserDao } from '@core/common/database/entities/user/user.dao'

const DAOs = [ArticleDao, UserDao]

@Module({
  providers: [...DAOs, DatabaseConfig],
  imports: [
    ConfigModule.forRoot({
      validate: DatabaseConfig.validateConfiguration,
    }),
    DrizzleModule,
  ],
  exports: DAOs,
})
export class DatabaseModule {}
