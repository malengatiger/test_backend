import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from Busha NestJS Backend running on GCP Cloud Run!';
  }
}
