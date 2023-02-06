import { Body, Controller, Get, Param, Post, Put, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { CreateCommentDto } from 'src/dto/comment.dto';
import { CommentService } from './comment.service';

@ApiTags("comment")
@Controller('/comments')
export class CommentController {
  constructor(private readonly CommentService: CommentService) { }

  @Get()
  getAll(@Query('page', ParseIntPipe) page: number, @Query('pageLimit', ParseIntPipe) pageLimit: number){
    return this.CommentService.getComments(page, pageLimit);
  }

  @Post()
  createComment(@Body() comment: CreateCommentDto) {
    return this.CommentService.createComment(comment);
  }

  @Patch("/:id")
  async updateComment(@Param("id", ParseIntPipe) id: number) {
    return await this.CommentService.approveComment(id);
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
