import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { YearService } from './year.service'
import { CreateYearDto } from './dto/create-year.dto'
import { UpdateYearDto } from './dto/update-year.dto'
import { YearResponseDto } from './dto/year-response.dto'

@Controller('year')
export class YearController {
  constructor(private readonly yearService: YearService) {}

  @Post()
  async create(@Body() createYearDto: CreateYearDto) {
    return this.yearService.create(createYearDto)
  }

  @Get()
  async findAll(): Promise<YearResponseDto[]> {
    return this.yearService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.yearService.findOne(+id)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateYearDto: UpdateYearDto) {
    return this.yearService.update(+id, updateYearDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.yearService.remove(+id)
  }
}
