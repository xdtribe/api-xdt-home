import { NestFactory } from '@nestjs/core'
import { AppModule } from 'src/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  return await app.listen(process.env.PORT || 5001)
}
bootstrap()
