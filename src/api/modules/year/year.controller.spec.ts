import { Test, TestingModule } from '@nestjs/testing'
import { YearController } from './year.controller'
import { YearService } from './year.service'

describe('YearController', () => {
  let controller: YearController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YearController],
      providers: [YearService],
    }).compile()

    controller = module.get<YearController>(YearController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
