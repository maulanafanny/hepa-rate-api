import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ApiConfig } from './config/api.config'
import { UserModule } from './modules/user/user.module'
import { ArticleModule } from './modules/article/article.module'
import { CriteriaModule } from './modules/criteria/criteria.module'
import { DistrictModule } from './modules/district/district.module'
import { YearModule } from './modules/year/year.module'
import { AuthModule } from './modules/auth/auth.module';

@Module({
  providers: [ApiConfig],
  imports: [
    ConfigModule.forRoot({
      validate: ApiConfig.validateConfiguration,
    }),
    UserModule,
    ArticleModule,
    CriteriaModule,
    DistrictModule,
    YearModule,
    AuthModule,
  ],
})
export class ApiModule {}
