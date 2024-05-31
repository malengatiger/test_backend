import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}
  @Get('getNews')
  async getNews(@Query('keyword') keyword: string) {
    return await this.newsService.getNews(keyword);
  }
}
