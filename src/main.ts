import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000', // allow frontend origin
    credentials: true, // if you're using cookies or auth
  });

  await app.listen(3002); // or any port you're using
}
bootstrap();
