import { Module } from '@nestjs/common';
import { TezosService } from './tezos.service';
import { TezosController } from './tezos.controller';

@Module({
  controllers: [TezosController],
  providers: [TezosService],
})
export class TezosModule {}
