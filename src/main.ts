import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AllExceptionsFilter } from './filter/exception.filter'
import { setupSwagger } from './open-swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // 全局错误处理
  app.useGlobalFilters(new AllExceptionsFilter())
  setupSwagger(app)
  await app.listen(3000)
}
bootstrap()
