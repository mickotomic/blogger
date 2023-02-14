import { Body, Controller, Get, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { PostsDto } from 'src/dto/posts.dto';
import { PostStatisticsService } from './postStatistics.service';

@ApiTags("postStatistics")
@Controller('/postStatistics')
export class PostStatisticsController {
  constructor(private readonly PostStaticsService: PostStatisticsService) { }
  
  @ApiQuery({name: 'page', type: Number, required: false})
  @ApiQuery({name: 'perPage', type: Number, required: false})
  @Get("/statisticsList")
  async getPostStatistics(@Query("page") page: number, @Query("perPage") perPage: number) { 
    return await this.PostStaticsService.getPostStatistics(
      page, perPage);
  }
}
