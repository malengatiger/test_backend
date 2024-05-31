/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
const mm = '🍎 🍎 TezosService';
@Injectable()
export class TezosService {
  //
  mainnetUrl = `https://api.tzkt.io/v1/`;
  ghostnetUrl = `https://api.ghostnet.tzkt.io/v1/`;
  oxfordnetUrl = `https://api.oxfordnet.tzkt.io/v1/ `;
  mx = 'https://api.tzkt.io/v1/blocks';

  async getBalance(address: string): Promise<number> {
    return 1000;
  }
  async getAccounts(): Promise<any> {
    const url = `${this.mainnetUrl}accounts`;
    console.log(`${mm} getAccounts url:${url}`);
    try {
      const mResponse = await fetch(url);
      const mJson = await mResponse.json();
      //   console.log(`${mm} Response from Tezos getAccounts:${mJson}`);
      return mJson;
    } catch (error) {}
  }

  async getHead(): Promise<any> {
    try {
      const mResponse = await fetch(`${this.mainnetUrl}head`);
      const mJson = await mResponse.json();
      //   console.log(`${mm} Response from Tezos getHead:${mJson}`);
      return mJson;
    } catch (error) {}
  }
  async getBlock(timestamp: string): Promise<any> {
    const url = `${this.mainnetUrl}blocks/${timestamp}`;
    console.log(`${mm} getBlock url: 🍎 ${url}`);
    try {
      const mResponse = await fetch(url);
      const mJson = await mResponse.json();
      //   console.log(`${mm} Response from Tezos getBlocks:${mJson}`);
      return mJson;
    } catch (error) {
      console.error(`${mm} getBlock error: 😡 😡 😡 ${error}`);
      throw new Error(`getBlocs error: ${error}`);
    }
    return 1000;
  }

  //
}
