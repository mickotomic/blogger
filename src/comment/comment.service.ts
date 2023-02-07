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
import { Stats } from 'src/entity/statistics.entity';

@Injectable()
export class CommentService {
  
  
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(Stats)
    private statsRepository: Repository<Stats>
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
      throw new BadRequestException("Inavlid rate ");
    }
    
    if (!commentDto.title) {
      throw new BadRequestException("Inavlid title");
    }
    
    const post = await this.postRepository.findOneBy({ id: commentDto.post });
    
    if (!post) {
      throw new NotFoundException("Post not found");
    }
    if (commentDto.user) {
      const user = await this.UserRepository.findOne({ where: { id: commentDto.user } });
    }
    return await this.commentRepository.save(commentDto);
  }

  async approveComment(id: number) {
    const coment = await this.commentRepository.findOne({ where: { id }, relations: ["post", "user"] });
    
    if (!coment) {
      throw new BadRequestException("Comment not found");
    }
    
    if (coment.isApproved === true) { 
      throw new BadRequestException("Comment already approved");
    }
    const post = await this.postRepository.findOne({ where: { id: coment.post.id }, relations: ["stats"] });
    post.stats.averageRate *= post.stats.totalCommentsOnPost;
    post.stats.averageRate += coment.rate;
    post.stats.totalCommentsOnPost++;
    post.stats.averageRate /= post.stats.totalCommentsOnPost;

    if (coment.user) {
      post.stats.userComents++;
    } else {
      post.stats.comentsFromAnyone++;
    }
    await this.statsRepository.update({ id: post.stats.id }, {
      averageRate: post.stats.averageRate
      , userComents: post.stats.userComents, totalCommentsOnPost: post.stats.totalCommentsOnPost
      , comentsFromAnyone: post.stats.comentsFromAnyone
    });
     
      return await this.commentRepository.update({ id }, { isApproved: true });
    
  }
}