import { Module } from '@nestjs/common'
import { CriteriaService } from './criteria.service'
import { CriteriaController } from './criteria.controller'
import { DatabaseModule } from '@core/common/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [CriteriaController],
  providers: [CriteriaService],
})
export class CriteriaModule {}
