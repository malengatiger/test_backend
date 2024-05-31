import { Test, TestingModule } from '@nestjs/testing';
import { TezosController } from './tezos.controller';
import { TezosService } from './tezos.service';

describe('TezosController', () => {
  let controller: TezosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TezosController],
      providers: [TezosService],
    }).compile();

    controller = module.get<TezosController>(TezosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
