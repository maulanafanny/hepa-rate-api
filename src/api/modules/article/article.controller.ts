import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ArticleService } from './article.service'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'
import { ArticleResponseDto } from './dto/article-response.dto'

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto)
  }

  @Get()
  async findAll(): Promise<ArticleResponseDto[]> {
    return this.articleService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.articleService.remove(+id)
  }
}
