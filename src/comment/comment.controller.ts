import { Body, Controller, Get, Param, Post, Put, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { CommentDto } from 'src/dto/comment.dto';
import { CommentService } from './comment.service';

@Controller('/comments')
export class CommentController {
  constructor(private readonly CommentService: CommentService) { }

  @Get()
  getAll(@Query('page', ParseIntPipe) page: number, @Query('pageLimit', ParseIntPipe) pageLimit: number){
    return this.CommentService.getComments(page, pageLimit);
  }

  @Post()
  createComment(@Body() comment: CommentDto) {
    return this.CommentService.postComment(comment);
  }
  // @Get('/:id')
  // getOne(@Param('id') id: number) {
  //   return this.PostService.getOne(+id);
  // }

  // @Post()
  // newElement(@Body() body: PostsDto) {
  //   return this.PostService.createPost(body);
  // }

  // @Put('/:id')
  // update(@Param('id') id: number,
  //        @Body() body: PostsDto) { 
  //   return this.PostService.updatePost(+id, body);
  // }

  // @Delete('/:id')
  // delete(@Param('id') id: number) { 
  //   return this.PostService.deletePost(+id);
  // }
}
