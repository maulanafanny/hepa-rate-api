import { Body, Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'

class HelloDTO {
  name: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Post()
  postHello(@Body() payload: HelloDTO): string {
    return this.appService.postHello(payload.name)
  }
}
