import { DistrictEntity } from '@core/common/database/entities/district/district.entity'

export class DistrictResponseDto implements DistrictEntity {
  id: number
  name: string
}
