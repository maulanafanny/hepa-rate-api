import { Module } from '@nestjs/common'
import { DistrictService } from './district.service'
import { DistrictController } from './district.controller'
import { DatabaseModule } from '@core/common/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [DistrictController],
  providers: [DistrictService],
})
export class DistrictModule {}
