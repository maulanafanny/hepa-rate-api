import { Injectable } from '@nestjs/common'
import { CreateDistrictDto } from './dto/create-district.dto'
import { UpdateDistrictDto } from './dto/update-district.dto'
import { DistrictDao } from '@core/common/database/entities/district/district.dao'
import { DistrictEntity } from '@core/common/database/entities/district/district.entity'

@Injectable()
export class DistrictService {
  constructor(private readonly districtDao: DistrictDao) {}

  async create(createDistrictDto: CreateDistrictDto) {
    return await this.districtDao.insertNewRecord(createDistrictDto)
  }

  async findAll(): Promise<DistrictEntity[]> {
    return await this.districtDao.getAll()
  }

  async findOne(id: number): Promise<DistrictEntity> {
    return (await this.districtDao.getOneById(id, [
      'id',
      'title',
      'content',
      'createdAt',
      'updatedAt',
    ])) as DistrictEntity
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return await this.districtDao.updateById(id, updateDistrictDto)
  }

  async remove(id: number) {
    return await this.districtDao.deleteById(id)
  }
}
