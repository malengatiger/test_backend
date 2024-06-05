import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { App, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const mm = '🔷 Busha NestJS Backend 🔷';
async function bootstrap() {
  console.log(`${mm} Bootstrap starting .....`);

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //
  const port = process.env.PORT || 3000;
  const config = new DocumentBuilder()
    .setTitle('Busha Dev Assessment Backend')
    .setDescription('Busha NestJS is a Dev Assessment Backend App')
    .setVersion('1.0')
    .addTag('busha')
    .build();
  //
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log(
    `${mm} SwaggerModule constructed 🍎 ${JSON.stringify(document)}  🍎`,
  );
  //
  await app.listen(port);
  console.log(`${mm} App listening on port 🍎 ${port} 🍎`);

  const firebaseAdmin: App = initializeApp();
  console.log(`${mm} Firebase admin initialized: ${firebaseAdmin.name}}}`);
  const auth = getAuth();
  console.log(`${mm} Firebase auth initialized: ${auth.app.name}}`);
}

bootstrap();

//https://drive.google.com/file/d/1ICM5Fad5ec31v030FLU8_lj1hcwwEjkN/view?usp=drive_link
