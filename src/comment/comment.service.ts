import { Injectable } from '@nestjs/common';
import { PostsDto } from 'src/dto/posts.dto';
import { posts } from 'src/data/persisted_data';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from 'src/entity/posts.entity';
import { BadGatewayException, BadRequestException, NotFoundException } from '@nestjs/common/exceptions';
import { throwError } from 'rxjs/internal/observable/throwError';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';
import { CreateCommentDto } from 'src/dto/comment.dto';
import { Comment } from 'src/entity/comment.entity';

@Injectable()
export class CommentService {
  
  
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ) { }

  async getComments(page, pageLimit): Promise<{ data: Comment[], count: number }> {
    const [data, count] = await this.commentRepository.findAndCount({
      where: { isApproved: true },
      take: pageLimit, skip: (page - 1) * pageLimit
    });
    return { data, count };
  }
  async createComment(commentDto) {

    if (!commentDto.rate || (commentDto.rate < 1 || commentDto.rate > 5)) {
      throw new BadRequestException("Inavlid rate");
    }
    
    if (!commentDto.title) {
      throw new BadRequestException("Inavlid title");
    }
    
    const post = await this.postRepository.findOneBy({ id: commentDto.post });
    
    if (!post) {
      throw new NotFoundException("Post not found");
    }
    
    return await this.commentRepository.save(commentDto);
  }
}
//   async postComment(comment: CreateCommentDto) {
//     const post = await this.PostRepository.findOneBy({ id: comment.post });
//     if (!comment.user) {
//       const newComment = await this.CommentRepository.save({
//         email: comment.email, name: comment.name, title: comment.title,
//         content: comment.content, posts: post, rate: comment.rate
//       });
//       return newComment;
//     } else {
//       const newUserID = await this.UserRepository.findOneBy({ id: comment.user })
//       return await this.CommentRepository.save({ posts: post, user: newUserID, title: comment.title, content: comment.content, rate: comment.rate });
//     }
//   }
// }
  //   async updatePost(id: number, post: PostsDto) {
  //     if (await this.postRepository.findOneBy({ id })) {
  //       return await this.postRepository.update({ id }, post);
  //     }
  //     throw new NotFoundException("Post not found");
  //   }
    

  //   async deletePost(id: number) {
  //     if (await this.postRepository.findOneBy({ id })) {
  //       return await this.postRepository.delete({ id });
  //     }
  //     throw new NotFoundException("Post not found");
  //   }
  

 