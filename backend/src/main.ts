// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// console.log('PORT......:', process.env.PORT);

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3100);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Tech Stack API')
    .setDescription('API documentation for managing tech stack resources')
    .setVersion('1.0')
    .addTag('TechStack')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3100);
}
bootstrap();
