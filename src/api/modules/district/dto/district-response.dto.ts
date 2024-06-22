import { DistrictEntity } from '@core/common/database/entities/district/district.entity'

export class DistrictResponseDto implements DistrictEntity {
  id: number
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}
