import { YearEntity } from '../../../../core/common/database/entities/year/year.entity'

export class YearResponseDto implements YearEntity {
  id: number
  year: string
  is_stale: boolean
}
