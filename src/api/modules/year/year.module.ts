import { Module } from '@nestjs/common'
import { YearService } from './year.service'
import { YearController } from './year.controller'
import { DatabaseModule } from '../../../core/common/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [YearController],
  exports: [YearService],
  providers: [YearService],
})
export class YearModule {}
