import { Injectable } from '@nestjs/common'
import { CreateCriteriaDto } from './dto/create-criteria.dto'
import { UpdateCriteriaDto } from './dto/update-criteria.dto'
import { CriteriaDao } from '@core/common/database/entities/criteria/criteria.dao'
import { CriteriaEntity } from '@core/common/database/entities/criteria/criteria.entity'

@Injectable()
export class CriteriaService {
  constructor(private readonly criteriaDao: CriteriaDao) {}

  async create(createCriteriaDto: CreateCriteriaDto) {
    return await this.criteriaDao.insertNewRecord(createCriteriaDto)
  }

  async findAll(): Promise<CriteriaEntity[]> {
    return await this.criteriaDao.getAll()
  }

  async findOne(id: number): Promise<CriteriaEntity> {
    return (await this.criteriaDao.getOneById(id, [
      'id',
      'title',
      'content',
      'createdAt',
      'updatedAt',
    ])) as CriteriaEntity
  }

  async update(id: number, updateCriteriaDto: UpdateCriteriaDto) {
    return await this.criteriaDao.updateById(id, updateCriteriaDto)
  }

  async remove(id: number) {
    return await this.criteriaDao.deleteById(id)
  }
}
