import { ArticleEntity } from '@core/common/database/entities/article/article.entity'

export class ArticleResponseDto implements ArticleEntity {
  id: number
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}
