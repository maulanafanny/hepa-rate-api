import { CriteriaEntity } from '@core/common/database/entities/criteria/criteria.entity'

export class CriteriaResponseDto implements CriteriaEntity {
  id: number
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}
