import { CriteriaEntity } from '../../../../core/common/database/entities/criteria/criteria.entity'

export class CriteriaResponseDto implements CriteriaEntity {
  id: number
  total_case: number
  total_population: number
  sanitation_rate: number
  clean_water_rate: number
  safe_house_rate: number
  district_id: number
  year_id: number
  createdAt: Date
  updatedAt: Date
}
