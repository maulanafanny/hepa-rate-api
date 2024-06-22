import { YearEntity } from '@core/common/database/entities/year/year.entity'

export class YearResponseDto implements YearEntity {
  id: number
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}
