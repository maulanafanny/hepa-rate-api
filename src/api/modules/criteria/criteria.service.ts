import { Injectable } from '@nestjs/common'
import { CreateCriteriaDto } from './dto/create-criteria.dto'
import { UpdateCriteriaDto } from './dto/update-criteria.dto'
import { CriteriaDao } from '@core/common/database/entities/criteria/criteria.dao'
import { criteria, CriteriaEntity } from '@core/common/database/entities/criteria/criteria.entity'
import { district } from '@core/common/database/entities/district/district.entity'
import { eq } from 'drizzle-orm'
import { year } from '@core/common/database/entities/year/year.entity'

@Injectable()
export class CriteriaService {
  constructor(private readonly criteriaDao: CriteriaDao) {}

  async create(createCriteriaDto: CreateCriteriaDto) {
    return await this.criteriaDao.insertNewRecord(createCriteriaDto)
  }

  async findAll(): Promise<CriteriaEntity[]> {
    return await this.criteriaDao.getAll((query) => {
      query
        .leftJoin(district, eq(district.id, criteria.district_id))
        .leftJoin(year, eq(year.id, criteria.year_id))
    })
  }

  async findOne(id: number): Promise<CriteriaEntity> {
    return (await this.criteriaDao.getOneById(
      id,
      [
        'id',
        'total_case',
        'total_population',
        'sanitation_rate',
        'clean_water_rate',
        'safe_house_rate',
        'district_id',
        'year_id',
        'createdAt',
        'updatedAt',
      ],
      (query) => {
        query
          .leftJoin(district, eq(district.id, criteria.district_id))
          .leftJoin(year, eq(year.id, criteria.year_id))
      },
    )) as CriteriaEntity
  }

  async update(id: number, updateCriteriaDto: UpdateCriteriaDto) {
    return await this.criteriaDao.updateById(id, updateCriteriaDto)
  }

  async remove(id: number) {
    return await this.criteriaDao.deleteById(id)
  }
}
