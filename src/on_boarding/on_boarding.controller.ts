import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { OnBoardingService } from './on_boarding.service';
import { User } from 'src/models/user';

@Controller('on-boarding')
export class OnBoardingController {
  constructor(private readonly onBoardingService: OnBoardingService) {}

  @Post('/registerUser')
  async registerUser(@Body() user: User): Promise<User> {
    return this.onBoardingService.registerUser(user);
  }

  @Get('/getUserByEmail')
  async getUserByEmail(@Query('email') email: string): Promise<any> {
    console.log(`...... OnBoardingController, email: ${email}`);
    return this.onBoardingService.getUserByEmail(email);
  }
}
