import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { App, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const mm = '🔷 Busha NestJS Backend 🔷';
async function bootstrap() {
  console.log(`${mm} Bootstrap starting .....`);

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`${mm} App listening on port 🍎 ${port} 🍎`);

  const firebaseAdmin: App = initializeApp();
  console.log(`${mm} Firebase admin initialized: ${firebaseAdmin.name}}}`);
  const auth = getAuth();
  console.log(`${mm} Firebase auth initialized: ${auth.app.name}}`);
}

bootstrap();
