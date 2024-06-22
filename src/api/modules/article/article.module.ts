import { Module } from '@nestjs/common'
import { ArticleService } from './article.service'
import { ArticleController } from './article.controller'
import { DatabaseModule } from '@core/common/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
