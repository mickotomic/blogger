import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostsDto } from 'src/dto/posts.dto';
import { PostService } from './post.service';

@ApiTags("posts")
@Controller('/posts')
export class PostController {
  constructor(private readonly PostService: PostService) { }

  @Get()
  getAll() {
    return this.PostService.getPost();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.PostService.getOne(+id);
  }
  @Get('/:id/stats')
  statistics(@Param('id') id: number) {
    return this.PostService.getStats(+id);
  }

  @Post()
  newElement(@Body() body: PostsDto) {
    return this.PostService.createPost(body);
  }

  @Put('/:id')
  update(@Param('id') id: number,
         @Body() body: PostsDto) { 
    return this.PostService.updatePost(+id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) { 
    return this.PostService.deletePost(+id);
  }
}
