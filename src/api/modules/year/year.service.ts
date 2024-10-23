import { Injectable } from '@nestjs/common'
import { CreateYearDto } from './dto/create-year.dto'
import { UpdateYearDto } from './dto/update-year.dto'
import { YearDao } from '../../../core/common/database/entities/year/year.dao'
import { YearEntity } from '../../../core/common/database/entities/year/year.entity'

@Injectable()
export class YearService {
  constructor(private readonly yearDao: YearDao) {}

  async create(createYearDto: CreateYearDto) {
    return await this.yearDao.insertNewRecord(createYearDto)
  }

  async findAll(): Promise<YearEntity[]> {
    return await this.yearDao.getAll()
  }

  async findOne(id: number): Promise<YearEntity> {
    return (await this.yearDao.getOneById(id, ['id', 'year'])) as YearEntity
  }

  async update(id: number, updateYearDto: UpdateYearDto) {
    return await this.yearDao.updateById(id, updateYearDto)
  }

  async updateIsStale(id: number, is_stale: boolean) {
    return await this.yearDao.updateById(id, { is_stale })
  }

  async remove(id: number) {
    return await this.yearDao.deleteById(id)
  }
}
