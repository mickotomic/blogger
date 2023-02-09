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
import { Stats } from 'src/entity/statistics.entity';


@Injectable()
export class PostService {
  
  
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Stats)
    private statsRepository: Repository<Stats>
  ) { }

  async getPost(): Promise<{ data: Post[], count: number }> {
    const [data, count] = await this.postRepository.findAndCount();
    return { data, count };
  }

  async getOne(id: number): Promise<Post> {
    const findOne = await this.postRepository.findOneBy({ id });
    if (findOne) {
      this.views(id)
      return findOne;
    } else {
      throw new BadRequestException("Post not found");
    }
  }
    

  async createPost(post: PostsDto): Promise<Post> {
    
    const findUserId = await this.userRepository.findOneBy({ id: post.userId});
    if (!findUserId) { 
      throw new BadRequestException("User not found");
    }
      const newPost = await this.postRepository.save({ findUserId, ...post});
      await this.statsRepository.save({ post: newPost });
      return newPost;
      
    }

  async updatePost(id: number, post: PostsDto) {
    if (await this.postRepository.findOneBy({ id })) {
      return await this.postRepository.update({ id }, post);
    }
    throw new NotFoundException("Post not found");
  }
    

  async deletePost(id: number) {
    if (await this.postRepository.findOneBy({ id })) {
      return await this.postRepository.delete({ id });
    }
    throw new NotFoundException("Post not found");
  }
  
  async views(id: number) {
    const findOne = await this.postRepository.findOne({ where: { id }, relations: ['stats'] });
    if (findOne) {
      findOne.stats.wievs++;
    }
    this.statsRepository.update({ id: findOne.stats.id }, { wievs: findOne.stats.wievs });
  }

  async getStats(id: number) { 
    return await this.postRepository.findOne({ where: { id }, relations: ['stats'] });
  }
}