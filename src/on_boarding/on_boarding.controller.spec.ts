import { Test, TestingModule } from '@nestjs/testing';
import { OnBoardingController } from './on_boarding.controller';
import { OnBoardingService } from './on_boarding.service';

describe('OnBoardingController', () => {
  let controller: OnBoardingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnBoardingController],
      providers: [OnBoardingService],
    }).compile();

    controller = module.get<OnBoardingController>(OnBoardingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
