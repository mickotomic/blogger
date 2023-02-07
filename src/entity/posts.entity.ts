import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, OneToOne, ManyToMany } from 'typeorm';
import { Comment } from './comment.entity';
import { Stats } from './statistics.entity';
import { User } from './user.entity';


@Entity({ name: "test" })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", default: "test", length: 200 })
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (users) => users.posts)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @OneToOne(() => Stats, (stats) => stats.post)
  @JoinColumn()
  stats: Stats;
}
