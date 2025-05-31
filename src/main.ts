import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from 'src/persistence/config/app.module';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  await app.listen(3000, '0.0.0.0');
}

void bootstrap();
