import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ApiConfig } from '@api/config/api.config'
import { UserModule } from '@api/modules/user/user.module'
import { ArticleModule } from '@api/modules/article/article.module'
import { CriteriaModule } from '@api/modules/criteria/criteria.module'
import { DistrictModule } from '@api/modules/district/district.module'
import { YearModule } from '@api/modules/year/year.module'
import { AuthModule } from '@api/modules/auth/auth.module';

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
