import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Post } from './posts.entity';

@Entity({ name: 'stats' })
export class Stats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', default: 0 })
  wievs: number;

  @Column({ type: 'int', default: 0 })
  totalCommentsOnPost: number;

  @Column({ type: 'float', default: 0})
  averageRate: number;

  @Column({ type: 'int', default: 0 })
  userComents: number;

  @Column({ type: 'int', default: 0 })
  comentsFromAnyone: number;

  @OneToOne(() => Post, (post) => post.stats)
  post: Post;
}
