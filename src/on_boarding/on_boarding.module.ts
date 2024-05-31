import { Module } from '@nestjs/common';
import { OnBoardingService } from './on_boarding.service';
import { OnBoardingController } from './on_boarding.controller';

@Module({
  controllers: [OnBoardingController],
  providers: [OnBoardingService],
})
export class OnBoardingModule {}
