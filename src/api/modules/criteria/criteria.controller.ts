import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CriteriaService } from './criteria.service'
import { CreateCriteriaDto } from './dto/create-criteria.dto'
import { UpdateCriteriaDto } from './dto/update-criteria.dto'
import { CriteriaResponseDto } from './dto/criteria-response.dto'

@Controller('criteria')
export class CriteriaController {
  constructor(private readonly criteriaService: CriteriaService) {}

  @Post()
  async create(@Body() createCriteriaDto: CreateCriteriaDto) {
    return this.criteriaService.create(createCriteriaDto)
  }

  @Get()
  async findAll(): Promise<CriteriaResponseDto[]> {
    return this.criteriaService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.criteriaService.findOne(+id)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCriteriaDto: UpdateCriteriaDto) {
    return this.criteriaService.update(+id, updateCriteriaDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.criteriaService.remove(+id)
  }
}
