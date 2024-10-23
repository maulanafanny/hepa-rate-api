import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CriteriaService } from './criteria.service'
import { CreateCriteriaDto } from './dto/create-criteria.dto'
import { UpdateCriteriaDto } from './dto/update-criteria.dto'
import { CriteriaResponseDto } from './dto/criteria-response.dto'
import { YearService } from '../year/year.service'
import { CreateDatasetDto } from './dto/create-dataset.dto'

@Controller('criteria')
export class CriteriaController {
  constructor(
    private readonly criteriaService: CriteriaService,
    private readonly yearService: YearService,
  ) {}

  @Post()
  async create(@Body() createCriteriaDto: CreateCriteriaDto) {
    return this.criteriaService.create(createCriteriaDto)
  }

  @Post('dataset')
  async createDataset(@Body() { name, datasets }: CreateDatasetDto) {
    const year = await this.yearService.create({ year: name })

    return this.criteriaService.createMany(
      datasets.map((d) => ({ ...d.criteria, district_id: d.district.id, year_id: year.id })),
    )
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
    const criteria = await this.criteriaService.update(+id, updateCriteriaDto)

    this.yearService.updateIsStale(criteria[0].year_id, true)

    return criteria
  }

  @Get('clustering/:yearId')
  async clustering(@Param('yearId') yearId: string) {
    return this.criteriaService.clustering(+yearId)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.criteriaService.remove(+id)
  }
}
