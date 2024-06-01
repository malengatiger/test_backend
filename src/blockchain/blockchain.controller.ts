import { Controller, Get, Query } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';

@Controller('blockchain')
export class BlockchainController {
  constructor(private readonly blockchainService: BlockchainService) {}

  @Get('/getLatestBlock')
  async getLatestBlock() {
    return this.blockchainService.getLatestBlock();
  }

  @Get('/getBlockTransactions')
  async getBlockTransactions(@Query('hash') hash: string) {
    return this.blockchainService.getBlockTransactions(hash);
  }
}
