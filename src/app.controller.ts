import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): string {
    // console.log(req.headers);
    console.log(
      `url path: ${req.protocol}://${req.get('host')}${req.originalUrl}`,
    );
    return this.appService.getHello();
  }
}
