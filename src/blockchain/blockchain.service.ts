/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import axios, { Axios, AxiosResponse } from 'axios';

const blockChainUrl = ' https://blockchain.info/';
const latestBlockUrl = blockChainUrl + 'latestblock';
const blockTransactionsUrl = blockChainUrl + 'rawblock/';
const tezosUrl = 'https://api.tzkt.io/#tag/Blocks';

@Injectable()
export class BlockchainService {
  async getLatestBlock(): Promise<any> {
    const response = await this.get(latestBlockUrl);
    return response;
  }

  async getBlockTransactions(hash: string): Promise<any> {
    const path = blockTransactionsUrl + hash;
    const response = await this.get(path);
    return response;
  }

  private async get(url: string): Promise<any> {
    // console.log(`Send a GET request ... url: ${url}`);
    const response: AxiosResponse<any, any> = await axios({
      method: 'get',
      url: url,
    });
    return {
      status: response.status,
      data: response.data,
    };
  }
}
