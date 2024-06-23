import { PartialType } from '@nestjs/mapped-types'
import { CreateCriteriaDto } from './create-criteria.dto'

export class UpdateCriteriaDto extends PartialType(CreateCriteriaDto) {
  total_case?: number
  total_population?: number
  sanitation_rate?: number
  clean_water_rate?: number
  safe_house_rate?: number
}
