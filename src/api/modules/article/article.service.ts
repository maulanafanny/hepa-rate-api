import { Injectable } from '@nestjs/common'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'
import { ArticleDao } from '../../../core/common/database/entities/article/article.dao'
import { ArticleEntity } from '../../../core/common/database/entities/article/article.entity'

@Injectable()
export class ArticleService {
  constructor(private readonly articleDao: ArticleDao) {}

  async create(createArticleDto: CreateArticleDto) {
    return await this.articleDao.insertNewRecord(createArticleDto)
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

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    return await this.articleDao.updateById(id, updateArticleDto)
  }

  async remove(id: number) {
    return await this.articleDao.deleteById(id)
  }
}
