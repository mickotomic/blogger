import { Module } from '@nestjs/common';
import { PostModule } from './posts/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModule } from './user/user.module';
import { commentModule } from './comment/comment.module';
import { PostStatisticsModule } from './statistics/postStatistics.module';
@Module({

  imports: [PostModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'blogger',
    entities: ['./dist/entity/*.entity.js'],
    synchronize: true,
    migrations: ['./dist/migrations/*.js'],
    autoLoadEntities: true
  }), UserModule, 
    commentModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule { 
  constructor(private dataSource: DataSource) {}
}
