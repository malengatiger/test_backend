import { Controller, Get, Query } from '@nestjs/common';
import { TezosService } from './tezos.service';

@Controller('tezos')
export class TezosController {
  constructor(private readonly tezosService: TezosService) {}

  @Get('getAccounts')
  async getAccounts(): Promise<any> {
    return await this.tezosService.getAccounts();
  }
  @Get('getHead')
  async getHead(): Promise<any> {
    return await this.tezosService.getHead();
  }
  @Get('getBlock')
  async getBlocks(@Query('timestamp') timestamp: string): Promise<any> {
    return await this.tezosService.getBlock(timestamp);
  }
}
