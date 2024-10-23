import { Injectable } from '@nestjs/common'
import { eq } from 'drizzle-orm'
import { CreateCriteriaDto } from './dto/create-criteria.dto'
import { UpdateCriteriaDto } from './dto/update-criteria.dto'
import { CriteriaDao } from '../../../core/common/database/entities/criteria/criteria.dao'
import {
  criteria,
  CriteriaEntity,
} from '../../../core/common/database/entities/criteria/criteria.entity'
import { district } from '../../../core/common/database/entities/district/district.entity'
import { year } from '../../../core/common/database/entities/year/year.entity'

@Injectable()
export class CriteriaService {
  constructor(private readonly criteriaDao: CriteriaDao) {}

  async create(createCriteriaDto: CreateCriteriaDto) {
    return await this.criteriaDao.insertNewRecord(createCriteriaDto)
  }

  async createMany(createCriteriaDtos: CreateCriteriaDto[]) {
    return await this.criteriaDao.insertBulkRecords(createCriteriaDtos)
  }

  async findAll(): Promise<CriteriaEntity[]> {
    return await this.criteriaDao.getAll((query) => {
      query
        .leftJoin(district, eq(district.id, criteria.district_id))
        .leftJoin(year, eq(year.id, criteria.year_id))
        .orderBy(criteria.district_id)
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

  async clustering(yearId: number) {
    const data = (await this.criteriaDao.getAll())
      .filter((d) => d.year_id === yearId)
      .map((d) => ({
        total_case: d.total_case,
        clean_water_rate: d.clean_water_rate,
        safe_house_rate: d.safe_house_rate,
        total_population: d.total_population,
        sanitation_rate: d.sanitation_rate,
        district_id: d.district_id,
        year_id: d.year_id,
      }))
      .sort((a, b) => a.district_id - b.district_id)

    try {
      const response = await fetch('http://127.0.0.1:3333/clustering', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dataset: data,
        }),
      })

      console.log(response.status)
    } catch (error) {
      console.log(error)
    }

    return data
  }

  async remove(id: number) {
    return await this.criteriaDao.deleteById(id)
  }
}
