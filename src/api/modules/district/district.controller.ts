import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { DistrictService } from './district.service'
import { CreateDistrictDto } from './dto/create-district.dto'
import { UpdateDistrictDto } from './dto/update-district.dto'
import { DistrictResponseDto } from './dto/district-response.dto'

@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @Post()
  async create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto)
  }

  @Get()
  async findAll(): Promise<DistrictResponseDto[]> {
    return this.districtService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.districtService.findOne(+id)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDistrictDto: UpdateDistrictDto) {
    return this.districtService.update(+id, updateDistrictDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.districtService.remove(+id)
  }
}
