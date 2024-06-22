import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ApiConfig } from './config/api.config'
import { UserModule } from './modules/user/user.module'
import { ArticleModule } from './modules/article/article.module'

@Module({
  providers: [ApiConfig],
  imports: [
    ConfigModule.forRoot({
      validate: ApiConfig.validateConfiguration,
    }),
    UserModule,
    ArticleModule,
  ],
})
export class ApiModule {}
