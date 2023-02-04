import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Comment } from './comment.entity';
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

  @OneToMany(() => Comment, (coment) => coment.posts)
  comments: Comment[];
}
