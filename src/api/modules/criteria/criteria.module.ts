import { Module } from '@nestjs/common'
import { CriteriaService } from './criteria.service'
import { CriteriaController } from './criteria.controller'
import { DatabaseModule } from '../../../core/common/database/database.module'
import { YearModule } from '../year/year.module'

@Module({
  imports: [DatabaseModule, YearModule],
  controllers: [CriteriaController],
  providers: [CriteriaService],
})
export class CriteriaModule {}
