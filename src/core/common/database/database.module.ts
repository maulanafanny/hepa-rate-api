import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseConfig } from './config/database.config'
import { DrizzleModule } from './drizzle/drizzle.module'
import { ArticleDao } from './entities/article/article.dao'
import { UserDao } from './entities/user/user.dao'
import { YearDao } from './entities/year/year.dao'
import { CriteriaDao } from './entities/criteria/criteria.dao'
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
