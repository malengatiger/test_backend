import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OnBoardingModule } from './on_boarding/on_boarding.module';
import { BlockchainModule } from './blockchain/blockchain.module';
import { NewsModule } from './news/news.module';
import { ConfigModule } from '@nestjs/config';
import { TezosModule } from './tezos/tezos.module';
@Module({
  imports: [
    OnBoardingModule,
    BlockchainModule,
    NewsModule,
    ConfigModule.forRoot(),
    TezosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
