import { Test, TestingModule } from '@nestjs/testing';
import { OnBoardingService } from './on_boarding.service';

describe('OnBoardingService', () => {
  let service: OnBoardingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnBoardingService],
    }).compile();

    service = module.get<OnBoardingService>(OnBoardingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
