import { NestFactory } from '@nestjs/core'
import { ApiModule } from './api.module'
import { ApiConfig } from './config/api.config'

async function bootstrap() {
  const app = await NestFactory.create(ApiModule)
  const apiConfig = app.get(ApiConfig)

  app.enableCors()
  app.setGlobalPrefix(apiConfig.globalPrefix)

  await app.listen(apiConfig.getApiPortNumber)
}

void bootstrap()
