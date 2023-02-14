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
import { generateOffset } from 'src/helpers/pagination.helper';


@Injectable()
export class PostStatisticsService {
  
  
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Stats)
    private statsRepository: Repository<Stats>
  ) { }

  async getPostStatistics(page: number, perPage: number): Promise<{ data: Stats[], count: number, perPage: number }> {
    
    const pagination = generateOffset(page, perPage);
    const [data, count] = await this.statsRepository.findAndCount({
      relations: ["post"],
      skip: pagination.offset,
      take: pagination.limit
    });


    return {
      data,
      count,
      perPage: pagination.limit
    }
  }

}

