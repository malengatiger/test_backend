import { Controller, Get, Query } from '@nestjs/common';
import { TezosService } from './tezos.service';

@Controller('tezos')
export class TezosController {
  constructor(private readonly tezosService: TezosService) {}

  @Get('getAccounts')
  async getAccounts(
    @Query('balanceParam') balanceParam: number,
    @Query('limit') limit: number,
  ): Promise<any> {
    return await this.tezosService.getAccounts(balanceParam, limit);
  }
  @Get('getHead')
  async getHead(): Promise<any> {
    return await this.tezosService.getHead();
  }
  @Get('getBlock')
  async getBlocks(@Query('timestamp') timestamp: string): Promise<any> {
    return await this.tezosService.getBlock(timestamp);
  }

  @Get('getBalanceHistory')
  async getBalanceHistory(@Query('address') address: string): Promise<any> {
    return await this.tezosService.getBalanceHistory(address);
  }
  @Get('getBalance')
  async getBalance(@Query('address') address: string): Promise<any> {
    return await this.tezosService.getBalance(address);
  }
  @Get('getAccountOperations')
  async getAccountOperations(@Query('address') address: string): Promise<any> {
    return await this.tezosService.getAccountOperations(address);
  }
  @Get('getAccountContracts')
  async getAccountContracts(@Query('address') address: string): Promise<any> {
    return await this.tezosService.getAccountContracts(address);
  }
}
