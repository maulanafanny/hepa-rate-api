import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseConfig } from '@core/common/database/config/database.config'
import { DrizzleModule } from '@core/common/database/drizzle/drizzle.module'
import { ArticleDao } from '@core/common/database/entities/article/article.dao'
import { UserDao } from '@core/common/database/entities/user/user.dao'
import { YearDao } from '@core/common/database/entities/year/year.dao'
import { CriteriaDao } from '@core/common/database/entities/criteria/criteria.dao'
import { DistrictDao } from './entities/district/district.dao'

const DAOs = [ArticleDao, UserDao, YearDao, CriteriaDao, DistrictDao]

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
