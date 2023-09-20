import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import connectToMongo from './utils/connectToMongo';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await connectToMongo();
  await app.listen(3000);
}
bootstrap();
