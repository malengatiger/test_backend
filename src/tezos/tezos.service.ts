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

  //https://api.tzkt.io/v1/accounts?balance.gt=100000&limit=5
  //https://api.tzkt.io/v1/accounts?balance.gt=10000000&limit=3
  async getAccounts(balanceParam: number, limit: number): Promise<any> {
    const url = `${this.mainnetUrl}accounts?balance.gt=${balanceParam}&limit=${limit}&sort.desc=balance`;
    console.log(`${mm} getAccounts, check balanceParam ... 🍎 url:${url}`);
    try {
      const mResponse = await fetch(url);
      const mJson = await mResponse.json();
      // console.log(
      //   `${mm} Response from Tezos getAccounts: 🔷 ${JSON.stringify(mJson)} 🔷`,
      // );
      return mJson;
    } catch (error) {
      throw new Error(`getAccounts error: ${error}`);
    }
  }

  async getBalanceHistory(address: string): Promise<any> {
    const url = `${this.mainnetUrl}accounts/${address}/balance_history`;
    console.log(`${mm} getBalanceHistory 🍎 url:${url}`);
    try {
      const mResponse = await fetch(url);
      const mJson = await mResponse.json();
      //   console.log(`${mm} Response from Tezos getAccounts:${mJson}`);
      return mJson;
    } catch (error) {
      throw new Error(`getBalanceHistory error: ${error}`);
    }
  }
  async getBalance(address: string): Promise<any> {
    const url = `${this.mainnetUrl}accounts/${address}/balance`;
    console.log(`${mm} getBalance 🍎 url:${url}`);
    try {
      const mResponse = await fetch(url);
      const mJson = await mResponse.json();
      //   console.log(`${mm} Response from Tezos getAccounts:${mJson}`);
      return mJson;
    } catch (error) {}
  }
  async getAccountOperations(address: string): Promise<any> {
    const url = `${this.mainnetUrl}accounts/${address}/operations`;
    // console.log(`${mm} getAccountOperations 🍎 url:${url}`);
    try {
      const mResponse = await fetch(url);
      const mJson = await mResponse.json();
      //   console.log(`${mm} Response from Tezos getAccounts:${mJson}`);
      return mJson;
    } catch (error) {}
  }
  async getAccountContracts(address: string): Promise<any> {
    const url = `${this.mainnetUrl}accounts/${address}/contracts`;
    console.log(`${mm} getAccountContracts 🍎 url:${url}`);
    try {
      const mResponse = await fetch(url);
      const mJson = await mResponse.json();
      // console.log(`${mm} Response from Tezos getAccountContracts:${mJson}`);
      return mJson;
    } catch (error) {
      throw new Error(`getAccountContracts error: ${error}`);
    }
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
    console.log(`${mm} .... getBlock url: 🍎 ${url}`);
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
