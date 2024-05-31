import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  async getNews(keyword: string): Promise<any[]> {
    //https://newsdata.io/api/1/latest?apikey=pub_451865bb5110931dd8ed964ab95f05ea57b36&q=pizza

    //https://newsdata.io/api/1/archive?apikey=pub_451865bb5110931dd8ed964ab95f05ea57b36&q=example&language=en&from_date=2023-01-19&to_date=2023-01-25
    const apiKey = process.env.NEWSDATA_API_KEY;
    const apiUrl = `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=${keyword}&language=en`;

    console.log(`🔷🔷 Calling API: ${apiUrl}`);
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(`🔷🔷 Received news data: ${JSON.stringify(data)}`);
    return data;
  }
}

export interface News {
  status: number;
  totalResults: number;
  article_id: string;
  title: string;
  link: string;
  keywords: string;
  video_url: string;
  creator: string;
  description: string;
  pubDate: string;
  image_url: string;
  source_id: string;
  source_url: string;
  source_icon: string;
  source_priority: string;
  category: string;
  language: string;
  ai_tag: string;
  sentiment_stats: string;
  sentiment: string;
  ai_region: string;
  next_page: string;
  country: string;
}
