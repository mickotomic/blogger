import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/entity/posts.entity';
import { User } from 'src/entity/user.entity';
import { Comment } from 'src/entity/comment.entity';
import { Stats } from 'src/entity/statistics.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Post, User, Comment, Stats])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule { }
