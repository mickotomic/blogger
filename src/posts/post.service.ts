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


@Injectable()
export class PostService {
  
  
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async getPost(): Promise<{ data: Post[], count: number }> {
    const [data, count] = await this.postRepository.findAndCount();
    return { data, count };
  }

  async getOne(id: number): Promise<Post> {
    const findOne = await this.postRepository.findOneBy({ id });
    if (findOne) {
      return findOne;
    } else {
      throw new BadRequestException("Post not found");
    }
  }
    

  async createPost(post: PostsDto) {
    
    const findUserId = await this.userRepository.findOneBy({ id: post.userId });
    const newPost = await this.postRepository.save({ ...post, user: findUserId });
      if (newPost) {

        return newPost;
      } else { 
        throw new BadRequestException("Post not created");
      }
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
  }

 