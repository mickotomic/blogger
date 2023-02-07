import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostsDto } from 'src/dto/posts.dto';
import { PostStatisticsService } from './postStatistics.service';

@ApiTags("postStatistics")
@Controller('/postStatistics')
export class PostStatisticsController {
  constructor(private readonly PostStaticsService: PostStatisticsService) { }

  
}
