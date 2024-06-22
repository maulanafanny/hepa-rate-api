import { Injectable } from '@nestjs/common'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'
import { ArticleDao } from '@core/common/database/entities/article/article.dao'
import { ArticleEntity } from '@core/common/database/entities/article/article.entity'

@Injectable()
export class ArticleService {
  constructor(private readonly articleDao: ArticleDao) {}

  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article'
  }

  async findAll(): Promise<ArticleEntity[]> {
    return await this.articleDao.getAll()
  }

  async findOne(id: number): Promise<ArticleEntity> {
    return (await this.articleDao.getOneById(id, [
      'id',
      'title',
      'content',
      'createdAt',
      'updatedAt',
    ])) as ArticleEntity
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`
  }

  remove(id: number) {
    return `This action removes a #${id} article`
  }
}
